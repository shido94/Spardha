const express = require('express');


const router = express.Router();
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
mongoose.Promise = Promise;

const async = require('async');

const process = require('../../keys/jwt');
const checkAuth = require('../middleware/check-auth');


const Captain = require('../model/registration');
const Game = require('../model/games');

const csv = require('fast-csv');


var admin_login = 'spardha';
var admin_pass = 'KIET2K18';

router.post('/login', (req,res) => {
  if(req.body.email === admin_login && req.body.password === admin_pass) {
    const token = jwt.sign({
        id: 'private',
        username: 'website',
      }, process.env.JWT_KEYS ,
      {
        expiresIn: "5 days"
      });
    res.status(200).json({
      success: true,
      token: token,
      message: 'successfully loggedIn'
    });
  }
  else{
    res.status(404).json({
      success: false,
      message: 'Login failed'
    })
  }
});

router.get('/data',checkAuth, (req,res) => {
  Game.find({},'name')
    .then(result => {
      res.status(200).json({
        success: true,
        data: result
      });
    })
    .catch(error => {
      console.log(error);
      throw new error
    });
});

router.post('/details', checkAuth , (req,res) => {
  Game.findOne({_id: req.body.data},' captainId ')
    .populate('captainId')
    .exec((err,captain) => {
      res.status(200).json({
        success: true,
        data: captain
      });
    });
});

module.exports = router;

