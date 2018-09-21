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
const CaptainList = require('../model/captain');

const csv = require('fast-csv');

const admin_login = 'KIET123';
const admin_pass = 'KIET2K18';

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
  Game.find({},'name type')
    .then(result => {
      res.status(200).json({
        success: true,
        data: result
      });
    })
    .catch(error => {
      console.log(error);
      // throw new error
    });
});

// new one
router.post('/details', checkAuth , (req,res) => {
  Captain.find({game: req.body.game})
    .then(captains => {
      const teamArray = [];

      if (req.body.type === 'team') {

        for (let captain of captains) {
          const status = 'Not required';

          const obj = {
            data: captain,
            team: captain.team,
            status: status
          };
          teamArray.push(obj);
          if (teamArray.length === captains.length) {
            return res.status(200).json({
              success: true,
              data: teamArray,
            });
          }
        }
      }
      else {
        for (let captain of captains) {

          let last_id;
          if (captain.payment_status.length) {
            const length = captain.payment_status.length;
            last_id = captain.payment_status[length - 1];
          }
          else {
            last_id = null;
          }
          Payment.findOne({_id: last_id})
            .then(pay => {
              if (pay) {
                // const url = 'https://www.kiet.edu/erp-apis/index.php/payment/order_status/' + pay.ORDERID;

                // axios.get(url)
                //   .then(value => {

                    const status = pay.STATUS;
                    const amount = pay.TXNAMOUNT;
                    if (amount >= 68) {
                      const obj = {
                        data: captain,
                        team: captain.team,
                        status: status
                      };
                      teamArray.push(obj);
                      if (teamArray.length === captains.length) {
                        res.status(200).json({
                          success: true,
                          data: teamArray,
                        });
                      }
                    }
                    else {

                      const status = 'TXN_FAILURE';

                      const obj = {
                        data: captain,
                        team: captain.team,
                        status: status
                      };
                      teamArray.push(obj);
                      if (teamArray.length === captains.length) {
                        res.status(200).json({
                          success: true,
                          data: teamArray,
                        });
                      }
                    }
                  // });

              }
              else {
                const status = 'TXN_FAILURE';

                const obj = {
                  data: captain,
                  team: captain.team,
                  status: status
                };

                teamArray.push(obj);
                if (teamArray.length === captains.length) {
                  res.status(200).json({
                    success: true,
                    data: teamArray,
                  });
                }
              }
            })
        }
      }
    })
    .catch(error => {
      console.log(error);
      // throw new error;
    });
});



router.get('/captainList', (req,res) => {
  CaptainList.find()
    .then(lists => {
      return res.status(200).json(lists);
    })
    .catch(error => {
      console.log(error);
      // throw new error;
    })
});

module.exports = router;



// router.post('/details', checkAuth , (req,res) => {
//   console.log('data --> ', req.body.data);
//   // Game.findOne({_id: req.body.data},' type captainId ')
//   //   .populate('captainId')
//   //   .exec((err,captain) => {
//   //     console.log(captain);
//       if (captain.type === 'team') {
//         const teamArray = [];
//
//         for(let status of captain.captainId) {
//           const status = 'Not required';
//           teamArray.push(status);
//           if(teamArray.length === captain.captainId.length){
//             return res.status(200).json({
//               success: true,
//               data: captain,
//               status: teamArray
//             });
//           }
//         }
//
//       }
//   //     else{
//   //       const array = [];
//   //       for(let captains of captain.captainId) {
//   //         Captain.findOne({_id: captains._id},'name team game type payment_status')
//   //           .then(result => {
//   //             let last_id;
//   //             console.log('length --> ', result.payment_status.length);
//   //             if (result.payment_status.length) {
//   //               console.log('reachxessesf');
//   //               const length = result.payment_status.length;
//   //               last_id = result.payment_status[length - 1];
//   //             }
//   //             else {
//   //               console.log('reach');
//   //               last_id = null;
//   //             }
//   //
//   //             console.log('lstID --> ', last_id);
//   //             Payment.findOne({_id: last_id})
//   //               .then(pay => {
//   //                 if (pay) {
//   //                   const url = 'https://www.kiet.edu/erp-apis/index.php/payment/order_status/' + pay.ORDERID;
//   //
//   //                   axios.get(url)
//   //                     .then(value => {
//   //
//   //                       const status = value.data.STATUS;
//   //                       const amount = value.data.TXN_AMOUNT;
//   //                       if (amount >= 68) {
//   //                         array.push(status);
//   //                         if (array.length === captain.captainId.length) {
//   //                           console.log('array --> ', array);
//   //                           res.status(200).json({
//   //                             success: true,
//   //                             data: captain,
//   //                             status: array
//   //                           });
//   //                         }
//   //                       }
//   //                       else {
//   //                         array.push("TXN_FAILURE");
//   //                         if (array.length === captain.captainId.length) {
//   //                           console.log('array --> ', array);
//   //                           res.status(200).json({
//   //                             success: true,
//   //                             data: captain,
//   //                             status: array
//   //                           });
//   //                         }
//   //                       }
//   //                     });
//   //                 }
//   //                 else {
//   //                   const status = 'TXN_FAILURE';
//   //                   array.push(status);
//   //                   if(array.length === captain.captainId.length){
//   //                     console.log(array);
//   //                     res.status(200).json({
//   //                       success: true,
//   //                       data: captain,
//   //                       status: array
//   //                     });
//   //                   }
//   //                 }
//   //               });
//   //           })
//   //       }
//   //     }
//   //   });
// });
