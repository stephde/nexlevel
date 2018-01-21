var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');

const User = require('../models/user');

var secret = '7x0jhxt&quot;9(thpX6';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Registration Endpoint
router.post('/register', function (req, res) {
  User.register(new User({ email: req.body.email }), req.body.password, function (err, user) {
    if (err) {
      return res.status(400).send({ error: 'Email address in use.' })
    }
    res.status(200).send({ user: user.id });
  });
});

//Login Endpoint
router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    if (user) {
      var token = jwt.sign({ id: user._id, email: user.email }, secret);
      return res
        .status(200)
        .json({ token });
    }
  })(req, res, next);
});

module.exports = router;
