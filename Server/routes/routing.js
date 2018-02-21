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
            res.sendStatus(200).json({ route: result });
        })
        .catch(err => {
            res.sendStatus(500).json({error: err})
        })

});

module.exports = router;
