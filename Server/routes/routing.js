let express = require('express');
let router = express.Router();
// var passport = require('passport');

let Here = require('../components/here')
let here = new Here()

let NameGen = require('../components/nameGenerator')
let nameGen = new NameGen()

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

    const mockRoute = [{
        isLoading: false,
        connectionSegments: [
            {
                name: nameGen.next(),
                type: "BUS",
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
                type: "BUS",
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
    }]

    res.status(200).json(mockRoute).send()
})

module.exports = router;
