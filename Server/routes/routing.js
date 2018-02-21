let express = require('express');
let router = express.Router();
// var passport = require('passport');

let Here = require('../components/here')
let here = new Here()

let NameGen = require('../components/nameGenerator')
let nameGen = new NameGen()

const mapHereTransportMean = {
    railMetro: 'UBahn',
    busPublic: 'Bus'
}

router.get('/', function (req, res, next) {

    const origin = req.query.origin;
    const destination = req.query.destination;

    here.getRoute(origin, destination)
        .then(result => {
            res.status(200).json({ route: result }).send()
        })
        .catch(err => {
            res.status(500).json({error: err}).send()
        })
});

router.get('/autocomplete', (req, res, next) => {
    const query = req.query.query

    here.autocomplete(query)
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

    const origin = req.query.origin || [52.485617,13.3636133];
    const destination = req.query.destination || [52.4986868,13.3728273];

    here.getRoute(origin, destination)
        .then(result => {
            let route = result.route[0]
            let segments = route.publicTransportLine.map(transportLine => {
                let segment = getMockSegment()

                segment.type = mapHereTransportMean[transportLine.type] || transportLine.type
                segment.arrivalName = transportLine.destination

                return segment
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

module.exports = router;
