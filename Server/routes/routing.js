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

let requestCache = []

router.get('/', function (req, res, next) {

    const origin = req.query.origin;
    const destination = req.query.destination;

    cacheRequest(origin, destination)

    here.getRoute(origin, destination)
        .then(result => {
            res.status(200).json({ route: result }).send()
        })
        .catch(err => {
            res.status(500).json({error: err}).send()
        })
});

router.get('/requests', function (req, res, next) {
    res.status(200).json(requestCache).send()
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
            res.status(200).json( r ).send()
        })
        .catch(e => {
            res.status(500).json({ error: e }).send()
        })
})

router.get('/mock', (req, res, next) => {
    res.status(200).json(getMockRoute()).send()
})

router.get('/mockdynamic', (req, res, next) => {

    const origin = JSON.parse(req.query.origin) || [52.485617,13.3636133]
    //ToDo: actually get real destination name !!!
    const destName = req.query.destName || "U-Bahnhof Bülowstraße"
    const destination = JSON.parse(req.query.destination) || [52.4986868,13.3728273]

    cacheRequest(origin, destination)

    here.getRoute(origin, destination)
        .then(result => {
            let route = result.route[0]

            let maneuvers = route.leg[0].maneuver
                .filter(m => m._type === 'PublicTransportManeuverType')
                .filter((_, i) => i % 2 === 0)
                .map((e, i) => {
                    return Object.assign({}, e, route.publicTransportLine[i])
                })

            let segments = maneuvers.map((maneuver) => {
                let segment = getMockSegment()

                segment.departureName = maneuver.stopName
                segment.departureLocation = maneuver.position
                segment.type = mapHereTransportMean[maneuver.type] || maneuver.type

                return segment
            })

            segments.forEach((segment, index) => {
                if(index < (segments.length - 1)) {
                    segment.arrivalName = segments[index+1].departureName
                    segment.arrivalLocation = segments[index+1].departureLocation
                } else {
                    segment.arrivalName = destName
                    segment.arrivalLocation = {
                        latitude: destination[0],
                        longitude: destination[1]
                    }
                }
            })

            return {
                connectionSegments: segments,
                totalTime: Math.floor(route.summary.travelTime / 60)
            }
        })
        .then(result => res.status(200).json(result))
        .catch(e => res.status(500).json({error: e}).send())
})

function getMockRoute() {
    return {
        connectionSegments: [
            {
                name: nameGen.next(),
                type: "Bus",
                departureTime: {
                    h: 14,
                    min: 2
                },
                departureName: "U-Bahnhof Bülowstraße",
                departureLocation: {
                    latitude: "",
                    longitute: ""
                },
                arrivalTime: {
                    h: 14,
                    min: 21
                },
                arrivalName: "Alexanderplatz",
                arrivalLocation: {
                    latitude: "",
                    longitute: ""
                }
            },
            {
                name: nameGen.next(),
                type: "Bus",
                departureTime: {
                    h: 14,
                    min: 23
                },
                departureName: "Alexanderplatz",
                departureLocation: {
                    latitude: "",
                    longitute: ""
                },
                arrivalTime: {
                    h: 14,
                    min: 35
                },
                arrivalName: "Storkower Straße",
                arrivalLocation: {
                    latitude: "",
                    longitute: ""
                }
            }
        ]
    }
}

function getMockSegment() {
    return Object.assign({}, getMockRoute().connectionSegments[0])
}

function cacheRequest(from, to) {
    requestCache.push({
        id: uuidv1(),
        timestamp: Date.now(),
        from: from,
        to: to
    })
}

module.exports = router;
