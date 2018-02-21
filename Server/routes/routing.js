let express = require('express');
let router = express.Router();
// var passport = require('passport');

let Here = require('../components/here')
let here = new Here()

router.get('/', function (req, res, next) {

    const origin = req.params.origin;
    const destination = req.params.destination;

    here.getRoute(origin, destination)
        .then(result => {
            res.status(200).json({ route: result }).send()
        })
        .catch(err => {
            res.status(500).json({error: err}).send()
        })
});

router.get('/mock', (req, res, next) => {

    const mockRoute = [{
        isLoading: false,
        connectionSegments: [
            {
                name: "Jacky",
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
                name: "Paul",
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
