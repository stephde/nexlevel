let express = require('express');
let router = express.Router();
// var passport = require('passport');
const uuidv1 = require('uuid/v1');

let Here = require('../components/here')
let here = new Here()

let NameGen = require('../components/nameGenerator')
let nameGen = new NameGen()

const mapHereTransportMean = {
    railMetro: 'UBahn',
    busPublic: 'Bus'
}

const ONE_MINUTE = 60000

let requestCache = []

router.get('/', function (req, res, next) {

    const origin = req.query.origin;
    const destination = req.query.destination;

    cacheRequest(origin, destination)

    here.getRoute(origin, destination)
        .then(result => {
            res.status(200).send({ route: result })
        })
        .catch(err => {
            res.status(500).send({error: err})
        })
});

router.get('/requests', function (req, res, next) {
    res.status(200).send(requestCache)
})

router.post('/requests', function (req, res, next) {
    let requests = req.body.requests

    if(requests.length > 0)
        requestCache = req.body.requests

    res.sendStatus(200)
})

router.post('/request', function (req, res, next) {
    const origin = req.body.params.origin;
    const destination = req.body.params.destination;

    cacheRequest(origin, destination)

    res.sendStatus(200)
})

router.get('/autocomplete', (req, res, next) => {
    const query = req.query.query

    here.autocomplete(query)
        .then(r => {
            let promises = []
            //enrich with coordinates
            r.suggestions.forEach(suggestion => {
                promises.push(here.enrichWithGeoCode(suggestion))
            })

            return Promise.all(promises)
        })
        .then(r => {
            res.status(200).send( r )
        })
        .catch(e => {
            res.status(500).send({ error: e })
        })
})

router.get('/mock', (req, res, next) => {
    res.status(200).json(getMockRoute()).send()
})

router.get('/mockdynamic', (req, res, next) => {

    const origin = req.query.origin ? JSON.parse(req.query.origin) : [52.485617,13.3636133]
    //ToDo: actually get real destination name !!!
    const destName = req.query.destName || "U-Bahnhof Bülowstraße"
    const destination = req.query.destination ? JSON.parse(req.query.destination) : [52.4986868,13.3728273]

    here.getRoute(origin, destination)
        .then(result => {
            let route = result.route[0]
            let runningTime = Date.now()

            let maneuvers = route.leg[0].maneuver
                .filter(m => m._type === 'PublicTransportManeuverType')
                .filter((_, i) => i % 2 === 0)
                .map((e, i) => {
                    return Object.assign({}, e, route.publicTransportLine[i])
                })

            let segments = maneuvers.map((maneuver) => {
                let segment = getMockSegment()

                segment.type = mapHereTransportMean[maneuver.type] || maneuver.type
                segment.departureLocation = maneuver.position
                segment.travelDuration = maneuver.travelTime
                segment.departureName = maneuver.stopName
                segment.departureDate = new Date(runningTime + ONE_MINUTE)
                segment.departureTime = {
                    h: timeZonedHours(segment.departureDate),
                    min: segment.departureDate.getMinutes()
                }

                if(maneuver.travelTime)
                    runningTime += maneuver.travelTime * 1000


                segment.arrivalDate = new Date(runningTime)
                segment.arrivalTime = {
                    h: timeZonedHours(segment.arrivalDate),
                    min: segment.arrivalDate.getMinutes()
                }

                return segment
            })

            segments.forEach((segment, index) => {
                if(index < (segments.length - 1)) {
                    const nextSeg = segments[index+1]
                    segment.arrivalName = nextSeg.departureName
                    segment.arrivalLocation = nextSeg.departureLocation
                } else {
                    segment.arrivalName = destName
                    segment.arrivalLocation = {
                        latitude: destination[0],
                        longitude: destination[1]
                    }
                }
            })

            cacheRequest(origin, segments)

            return {
                connectionSegments: segments,
                totalTime: Math.floor(route.summary.travelTime / 60)
            }
        })
        .then(result => res.status(200).send(result))
        .catch(e => res.status(500).send({error: e}))
})

function getMockRoute() {
    return {
        connectionSegments: [
            {
                name: nameGen.getBoringName(),
                type: "Bus",
                departureTime: {
                    h: 14,
                    min: 2
                },
                departureName: "U-Bahnhof Bülowstraße",
                departureLocation: {
                    latitude: "",
                    longitude: ""
                },
                arrivalTime: {
                    h: 14,
                    min: 21
                },
                arrivalName: "Alexanderplatz",
                arrivalLocation: {
                    latitude: "",
                    longitude: ""
                }
            },
            {
                name: nameGen.getBoringName(),
                type: "Bus",
                departureTime: {
                    h: 14,
                    min: 23
                },
                departureName: "Alexanderplatz",
                departureLocation: {
                    latitude: "",
                    longitude: ""
                },
                arrivalTime: {
                    h: 14,
                    min: 35
                },
                arrivalName: "Storkower Straße",
                arrivalLocation: {
                    latitude: "",
                    longitude: ""
                }
            }
        ]
    }
}

function getMockSegment() {
    return Object.assign({}, getMockRoute().connectionSegments[0])
}

function cacheRequest(start, segments) {
    requestCache.push({
        id: uuidv1(),
        timestamp: Date.now(),
        points: [start].concat(segments.map(s => [s.arrivalLocation.latitude, s.arrivalLocation.longitude]))
    })
}

function timeZonedHours(date) {
    let germanhours = date.getUTCHours() + 1

    if(germanhours > 23)
        return 0

    return germanhours
}

module.exports = router;
