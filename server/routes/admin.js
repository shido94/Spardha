const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
mongoose.Promise = Promise;
const axios = require('axios');

const async = require('async');

const process = require('../../keys/jwt');
const checkAuth = require('../middleware/check-auth');

const Captain = require('../model/registration');
const Game = require('../model/games');
const Payment = require('../model/payment');

const csv = require('fast-csv');


var admin_login = 'KIET123';
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
  Game.findOne({_id: req.body.data},' type captainId ')
    .populate('captainId')
    .exec((err,captain) => {
      console.log(captain);
      if (captain.type === 'team') {
        const teamArray = [];

        for(let status of captain.captainId) {
          const status = 'Not required';
          teamArray.push(status);
          if(teamArray.length === captain.captainId.length){
            return res.status(200).json({
              success: true,
              data: captain,
              status: teamArray
            });
          }
        }

      }
      else{
        const array = [];
        for(let captains of captain.captainId) {
          Captain.findOne({_id: captains._id},'name team game type payment_status')
            .then(result => {
              let last_id;
              console.log('length --> ', result.payment_status.length);
              if (result.payment_status.length) {
                console.log('reachxessesf');
                const length = result.payment_status.length;
                last_id = result.payment_status[length - 1];
              }
              else {
                console.log('reach');
                last_id = null;
              }

              console.log('lstID --> ', last_id);
              Payment.findOne({_id: last_id})
                .then(pay => {
                  if (pay) {
                    const url = 'https://www.kiet.edu/erp-apis/index.php/payment/order_status/' + pay.ORDERID;

                    axios.get(url)
                      .then(value => {

                        const status = value.data.STATUS;
                        array.push(status);
                        if(array.length === captain.captainId.length){
                          console.log('array --> ',array);
                          res.status(200).json({
                            success: true,
                            data: captain,
                            status: array
                          });
                        }
                      });
                  }
                  else {
                    const status = 'TXN_FAILURE';
                    array.push(status);
                    if(array.length === captain.captainId.length){
                      console.log(array);
                      res.status(200).json({
                        success: true,
                        data: captain,
                        status: array
                      });
                    }
                  }
                });
            })
        }
      }
    });
});

module.exports = router;

