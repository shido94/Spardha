const express = require('express');


const router = express.Router();
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const axios = require('axios');
const async = require('async');

const captainAuth = require('../model/captain');
const Payment = require('../model/payment');
const Error = require('../model/errors');

const APP_KEY = 'SPORTS_18_SJSHUU';
// var CUST_ID = '';
const TXN_AMOUNT = 70;

mongoose.Promise = Promise;

// const async = require('async');


const process = require('../../keys/jwt');
const checkAuth = require('../middleware/check-auth');

const Captain = require('../model/registration');
const AddCaptain = require('../model/captain');
const Game = require('../model/games');


router.post('/register', (req,res) => {
  const game = req.body;
  const upper = game.libId.toUpperCase();
  game.libId = upper;


  if (game.type === 'team') {

    captainAuth.findOne({uniqueId: game.uniqueId, libId: game.libId, game: game.game})
      .then(result => {
        if (!result){
          return res.status(200).json({
            success: false,
            message: 'Wrong Verification Code or LibraryID'
          });
        }
        else{
          Captain.find({libId: game.libId, game: game.game})
            .then(captain => {
              if(captain.length) {
                return res.status(200).json({
                  success: false,
                  message: 'This captain is already registered'
                });
              }
              else{
                const capt = new Captain(game);
                capt.save( (err,done) => {
                  if(err){
                    console.log(err);
                    // throw new err
                  }
                  Game.updateOne({name: done.game}, {
                    $push: {
                      captainId: done._id
                    }
                  }, (errors, update) => {
                    if(errors) {
                      console.log(errors);
                      // throw errors
                    }
                    else{
                      const token = jwt.sign({
                          libId: done.libId,
                          userId: done._id,
                          branch: done.branch,
                          game: done.game,
                          type: 'team'
                        }, process.env.JWT_KEYS ,
                        {
                          expiresIn: "5 days"
                        });
                      res.status(200).json({
                        success: true,
                        token: token,
                        message: 'successfully registered'
                      });
                    }
                  });
                });
              }
            })
        }
      })
      .catch(error => {
        console.log(error);
        // throw new error
      });
  }
  else {

    if (game.name) {
      const captain = new Captain(game);
      captain.save((err, result) => {
        if (err) {
          console.log(err);
          // throw new err;
        }
        else {
          // const game = new Game();
          Game.updateOne({name: result.game}, {
            $push: {
              captainId: result._id
            }
          }, (errors, update) => {
            const token = jwt.sign({
                libId: result.libId,
                userId: result._id,
                game: result.game,
                type: 'individual'
              }, process.env.JWT_KEYS,
              {
                expiresIn: "5 days"
              });
            res.status(200).json({
              success: true,
              token: token,
              message: 'successfully registered'
            });
          });
        }
      });
    }
    else {
      return res.status(200).json({
        success: false,
        message: 'Wrong LibraryID'
      });
    }
  }
});

router.post('/member', checkAuth , (req,res) => {
  const player = req.body.itemRows;
  Captain.findOne({libId: req.userData.libId})
    .then(findYear => {
      const year4 = findYear.year;
      const year3 = year4-1;
      const year2 = year3-1;

      let year = [];
      let ID = [];

      let playerData = [];

      // const url = 'https://www.kiet.edu/erp-apis/index.php/verify/libid/' + sub;
      let playerId = [];

      // add libId to an array to send to kiet server
      player.forEach(id => {
        playerId.push(id.libId);
      });

      if(req.userData.type === 'individual' && playerId[0] == null) {
        return res.status(200).json({
          id: req.userData.userId,
          success: true,
          type: 'individual',
          message: 'Your have successfully registered'
        });
      }
      else{
        if(req.userData.type === 'team' && playerId[0] == null) {
          return res.status(200).json({
            success: false,
            type: 'team',
            message: 'You have to enter a team'
          })
        }
        else{
          axios.get('https://www.kiet.edu/erp-apis/index.php/verify/libid/'+playerId)
            .then(data => {
              let i = 0;
              for(let value of data.data) {
                if(value.Name !== undefined) {
                  let data = {
                    name: value.Name,
                    gender: value.Gender,
                    year: value.year,
                    branch: value.Dept,
                    libId: playerId[i]
                  };
                  playerData.push(data);
                  i++;
                }
                else{
                  return res.status(200).json({
                    success: false,
                    message: 'Library Id '+ playerId[i] + ' is wrong'
                  });
                  break;
                }
              }

              for(let user of player){
                if(req.userData.libId === user.libId) {
                  return res.status(200).json({
                    success: false,
                    message: 'Please check captain cannot registered as a team member'
                  });
                  break;
                }
              }


              player.forEach(players => {
                ID.push(players.libId);
              });
              const counts = {};
              for (let i = 0; i < ID.length; i++) {
                let num = ID[i];
                counts[num] = counts[num] ? counts[num] + 1 : 1;
              }
              for(let user of player) {
                if(counts[user.libId] > 1){
                  return res.status(200).json({
                    success: false,
                    message: 'Library Id ' +user.libId +' should be entered one time'
                  });
                  break;
                }
              }

              Game.findOne({name: req.userData.game})
                .then(game => {

                  Captain.findOne({_id: req.userData.userId})
                    .then(Isgirl => {
                      let total = [];

                      if(game.type === 'team' && Isgirl.gender === 'FEMALE') {

                        // Can be change if not working

                        for(let user of playerData) {
                          if(user.name === undefined) {
                            return res.status(200).json({
                              success: false,
                              message: 'Library Id " ' +user.libId +' " is wrong'
                            });
                            break;
                          }
                          else{
                            if(user.year != Isgirl.year){
                              return res.status(200).json({
                                success: false,
                                message: 'Library Id " ' +user.libId +' " is from another Year'
                              });
                              break;
                            }
                          }
                        }

                        if(playerData.length >= 11 && playerData.length <= 14) {
                          Captain.updateOne({_id: req.userData.userId, game: req.userData.game}, {
                            $set: {
                              team: playerData
                            }
                          }, (errors,update) => {
                            if(errors){
                              console.log(errors);
                              // throw errors;
                            }
                            else{
                              return res.status(200).json({
                                success: true,
                                type: 'team',
                                message: 'Team has been added successfully'
                              });
                            }
                          });
                        }
                        else{
                          return res.status(200).json({
                            success: false,
                            message: 'Member should be between 11 to 14'
                          });
                        }

                        // for(let user of playerData) {
                        //   total.push(1);
                        //   console.log(user.name);
                        //   if(user.name === undefined) {
                        //     console.log('done');
                        //     console.log('breack');
                        //     return res.status(200).json({
                        //       success: false,
                        //       message: 'Library Id " ' +user.libId +' " is wrong'
                        //     });
                        //     break;
                        //   }
                        //   else{
                        //     if(user.year != Isgirl.year) {
                        //       return res.status(200).json({
                        //         success: false,
                        //         message: 'Library Id " ' +user.libId +' " is from another Year'
                        //       });
                        //       break;
                        //     }
                        //     else{
                        //       console.log('reaches');
                        //       if(total.length == playerData.length) {
                        //         if(playerData.length >= 11 && playerData.length <= 14 ) {
                        //           Captain.updateOne({_id: req.userData.userId, game: req.userData.game}, {
                        //             $set: {
                        //               team: playerData
                        //             }
                        //           }, (errors,update) => {
                        //             if(errors){
                        //               console.log(errors);
                        //               throw errors;
                        //             }
                        //             else{
                        //               return res.status(200).json({
                        //                 success: true,
                        //                 type: 'team',
                        //                 message: 'Team has been added successfully'
                        //               });
                        //             }
                        //           });
                        //         }
                        //         else{
                        //           return res.status(200).json({
                        //             success: false,
                        //             message: 'Member should be between 11 to 14'
                        //           });
                        //         }
                        //       }
                        //     }
                        //   }
                        // }



                      }

                      else{

                        if(game.type === 'team'  && Isgirl.gender === 'MALE') {

                          for(let user of playerData) {
                            if(user.branch !== req.userData.branch) {
                              return res.status(200).json({
                                success: false,
                                message: 'Library Id " ' +user.libId +' " is from another branch'
                              });
                              break;
                            }
                          }


                          if(game.max_player-1 >= req.body.itemRows.length && game.min_player-1 <= req.body.itemRows.length) {
                            playerData.forEach(players => {
                              year.push(players.year);
                            });
                            const counts = {};
                            for (let i = 0; i < year.length; i++) {
                              let num = year[i];
                              counts[num] = counts[num] ? counts[num] + 1 : 1;
                            }

                            if ((counts[year4] <= game.max_player_year-1) && (counts[year3] <= game.max_player_year) && (counts[year2] <= game.max_player_year)) {
                              const array = [];


                              for(let user of playerData){
                                // get user.libId
                                async.parallel({
                                  capt: (callback) => {
                                    Captain.find({libId: user.libId, type: 'team'}, (err, captain) => {
                                      callback(null, captain.length);
                                    });
                                  },
                                  team: (callback) => {
                                    Captain.find({'team.libId': user.libId, type: 'team'})
                                      .then(member => {
                                        callback(null, member.length);
                                      });
                                  }
                                }, (err, results) => {
                                  const total = results.capt + results.team;
                                  if (total > 1) {
                                    return res.status(200).json({
                                      success: false,
                                      message: 'Library ID ' + user.libId + ' has already  been registered in two teams'
                                    });
                                  }
                                  else {
                                    array.push(results);

                                    if (array.length === player.length) {
                                      Captain.updateOne({_id: req.userData.userId, game: req.userData.game}, {
                                        $set: {
                                          team: playerData
                                        }
                                      }, (errors,update) => {
                                        if(errors){
                                          console.log(errors);
                                          // throw errors;
                                        }
                                        else{
                                          return res.status(200).json({
                                            success: true,
                                            type: 'team',
                                            message: 'Team has been added successfully'
                                          });
                                        }
                                      });
                                    }
                                  }
                                });
                              }
                            }
                            else {
                              res.status(200).json({
                                success: false,
                                message: 'Max number of player from same year should not more that ' + game.max_player_year+ ' OR must contains from every year'
                              });
                            }
                          }
                          else{
                            const min = game.min_player-1;
                            const max = game.max_player-1;

                            res.status(200).json({
                              success: false,
                              message: 'Team member should be between ' + min +' to ' + max
                            });
                          }
                        }

                        else{
                          Captain.updateOne({_id: req.userData.userId, game: req.userData.game}, {
                            $set: {
                              team: playerData
                            }
                          }, (errors,update) => {
                            if(errors){
                              console.log(errors);
                              // throw errors;
                            }
                            else{
                              return res.status(200).json({
                                id: req.userData.userId,
                                success: true,
                                type: 'individual',
                                message: 'Team has been added successfully'
                              });
                            }
                          });
                        }

                      }
                    });

                })
                .catch(err => {
                  console.log(err);
                  // throw err;
                });

            })
            .catch(error => {
              console.log(error);
              // throw new error
            });
        }
      }
    })
    .catch(error => {
      console.log(error);
    });

});

router.get('/keys', checkAuth, (req,res) => {
  const CUST_ID = req.query.id;
  const userId = CUST_ID;
  console.log(userId);

  Captain.findOne({_id: userId}, 'name team game type payment_status')
        .then(result => {
          let last_id;
          if (result.payment_status.length) {
            const length = result.payment_status.length;
            last_id = result.payment_status[length - 1];
          }
          else {
            last_id = null;
          }

          Payment.findOne({_id: last_id})
            .then(pay => {
              if (pay) {
                const url = 'https://www.kiet.edu/erp-apis/index.php/payment/order_status/' + pay.ORDERID;


                axios.get(url)
                  .then(value => {

                    return res.status(200).json({
                      success: true,
                      CUST_ID: CUST_ID,
                      APP_KEY: APP_KEY,
                      TXN_AMOUNT: TXN_AMOUNT,
                      data: result,
                      status: value.data.STATUS
                    });

                  });
              }
              else{
                return res.status(200).json({
                  success: true,
                  CUST_ID: CUST_ID,
                  APP_KEY: APP_KEY,
                  TXN_AMOUNT: TXN_AMOUNT,
                  data: result,
                  status: "TXN_FAILURE"
                });
              }
            })
        })
        .catch(error => {
          console.log(error);
          // throw new error;
        });

});

router.post('/add-captain', (req,res) => {
  const capt = req.body.value;
  console.log(req.body);
  AddCaptain.findOne({libId: capt.libId, game: capt.game})
    .then(result => {
      if(result) {
        AddCaptain.updateOne({libId: capt.libId}, {
          $set: {
            uniqueId: capt.uniqueId
          }
        }, (err,updated) => {
          if(err){
            console.log(err);
            // throw new err;
          }
          else{
            return res.status(200).json({
              success: true,
              message: 'successfully added'
            });
          }
        })
      }
      else{
        const captain = new AddCaptain(capt);
        captain.save((err,result) =>{
          if(err){
            console.log(err);
            // throw new err;
          }
          return res.status(200).json({
            success: true,
            message: 'successfully added'
          });
        });
      }
    })
    .catch(errors => {
      console.log(errors);
      // throw new errors
    });
});

router.post('/login', (req,res) => {
  const upper = req.body.libId.toUpperCase();
  req.body.libId = upper;
  Captain.findOne({libId: req.body.libId, game: req.body.game})
    .then(team => {
      console.log('team --> ', team);
      if (team) {
        const token = jwt.sign({
            libId: req.body.libId,
            // userId: team._id,
            game: team.game,
          }, process.env.JWT_KEYS,
          {
            expiresIn: "5 days"
          });
        res.status(200).json({
          success: true,
          token: token,
          message: 'successfully loggedIn'
        });
      }
      else {
        res.status(200).json({
          success: false,
          message: 'Login Failed'
        });
      }
    })
    .catch(error => {
      console.log(error);
      // throw error;
    });
});

router.get('/paytm_data', (req,res) => {
  const obj = req.query.amount;
  const paytm = JSON.parse(obj);
  const reduced_amount = 68.78;
  const url = 'https://www.kiet.edu/erp-apis/index.php/payment/do_transaction?APP_KEY='+APP_KEY
    +'&CUST_ID='+paytm.CUST_ID+'&TXN_AMOUNT='+reduced_amount+'&CALLBACK_URL=http://sportsfest.kiet.edu/user/paytm_response';

  res.redirect(url);
});

router.post('/paytm_response', (req,res) => {
  const paytmData = req.body;
  const url = 'https://www.kiet.edu/erp-apis/index.php/payment/order_status/' + paytmData.ORDERID;

  axios.get(url)
    .then(result => {
      const sendData = {
        ORDERID: paytmData.ORDERID,
        TXNAMOUNT: result.data.TXNAMOUNT,
        STATUS: result.data.STATUS,
        REGISTRATION_ID: paytmData.CUST_ID,
      };
      const payment = new Payment(sendData);
      payment.save((err, done) => {
        if (err) {
          console.log(err);
          // throw new err;
        }
        else {
          Captain.updateOne({_id: sendData.REGISTRATION_ID}, {
            $push: {
              payment_status: done._id
            }
          }, (err, update) => {
            if (err) {
              console.log(err);
              // throw new err;
            }
            else {
              if (sendData.TXNAMOUNT >= 68) {

                if (sendData.STATUS === 'PENDING') {
                  res.redirect('/user?status=info&message=your status is pending, Kindly refresh again');
                }
                if (sendData.STATUS === 'TXN_FAILURE') {
                  res.redirect('/user?status=error&message=Transaction Failed, Kindly pay again');
                }
                if (sendData.STATUS === 'TXN_SUCCESS') {
                  res.redirect('/user?status=success&message=registered successfully');
                }
              }
              else {
                res.redirect('/user?status=error&message=Transaction Declined');
              }
            }
          });
        }
      });
    })
    .catch(error => {
      console.log(error);
      const errors = new Error({
        type: error
      });
      errors.save((err,result) => {
        console.log(result);
      });
    });
});

// for try

router.post('/refresh-event',checkAuth , (req,res) => {

  Captain.find({libId: req.userData.libId, game: req.userData.game},'name team game type payment_status')
    .then(result => {
      const refreshArray = [];
      for(let person of result) {
        let last_id;
        if(person.payment_status.length) {
          const length = person.payment_status.length;
          last_id = person.payment_status[length - 1];
        }
        else{
          last_id = null;
        }

        Payment.findOne({_id: last_id})
          .then(pay => {
            if (pay) {
              const url = 'https://www.kiet.edu/erp-apis/index.php/payment/order_status/' + pay.ORDERID;

              axios.get(url)
                .then(value => {

                  const sendData = {
                    ORDERID: value.data.ORDERID,
                    TXNAMOUNT: value.data.TXNAMOUNT,
                    STATUS: value.data.STATUS,
                    REGISTRATION_ID: person._id
                  };

                  const payment = new Payment(sendData);
                  payment.save((err, done) => {
                    if (err) {
                      console.log(err);
                      // throw new err;
                    }
                    else {

                      Captain.updateOne({_id: person._id}, {
                        $push: {
                          payment_status: done._id
                        }
                      }, (err, update) => {
                        if (err) {
                          console.log(err);
                          // throw new err;
                        }
                        else {
                          const status = value.data.STATUS;
                          const amountInt = parseInt(value.data.TXNAMOUNT);

                          const obj = {
                            status: status,
                            amount: amountInt,
                            captain: person
                          };

                          refreshArray.push(obj);

                          if(refreshArray.length === result.length) {
                            return res.status(200).json({
                              success: true,
                              data: refreshArray
                            });
                          }
                        }
                      });
                    }
                  });
                });
            }
            else {
              let status;
              if(person.type === 'team'){
                status = 'No payment required';
              }
              else{
                status = 'TXN_FAILURE'; // 'TXN_FAILURE'
              }

              const obj = {
                status: status,
                amount: 1,
                captain: person
              };
              refreshArray.push(obj);
              if(refreshArray.length === result.length) {
                return res.status(200).json({
                  success: true,
                  data: refreshArray
                });
              }
            }
          });
      }

    })
    .catch(error => {
      console.log(error);
      // throw new error;
    });
});


// ORIGINAL

// router.post('/refresh-event',checkAuth , (req,res) => {
//
//   Captain.find({libId: req.userData.libId, game: req.userData.game},'name team game type payment_status')
//     .then(result => {
//       const refreshArray = [];
//       const amountArray = [];
//       for(let person of result) {
//         let last_id;
//         if(person.payment_status.length) {
//           const length = person.payment_status.length;
//           last_id = person.payment_status[length - 1];
//         }
//         else{
//           last_id = null;
//         }
//
//         Payment.findOne({_id: last_id})
//           .then(pay => {
//             if (pay) {
//               const url = 'https://www.kiet.edu/erp-apis/index.php/payment/order_status/' + pay.ORDERID;
//
//               axios.get(url)
//                 .then(value => {
//
//                   const sendData = {
//                     ORDERID: value.data.ORDERID,
//                     TXNAMOUNT: value.data.TXNAMOUNT,
//                     STATUS: value.data.STATUS,
//                     REGISTRATION_ID: person._id
//                   };
//
//                   const payment = new Payment(sendData);
//                   payment.save((err, done) => {
//                     if (err) {
//                       console.log(err);
//                       // throw new err;
//                     }
//                     else {
//
//                       Captain.updateOne({_id: person._id}, {
//                         $push: {
//                           payment_status: done._id
//                         }
//                       }, (err, update) => {
//                         if (err) {
//                           console.log(err);
//                           // throw new err;
//                         }
//                         else {
//                           const status = value.data.STATUS;
//                           refreshArray.push(status);
//                           const amountInt = parseInt(value.data.TXNAMOUNT);
//                           amountArray.push(amountInt);
//                           if(refreshArray.length === result.length) {
//                             console.log('status-- > ', status);
//                             console.log('amountArray-- > ', amountArray);
//                             return res.status(200).json({
//                               success: true,
//                               data: result,
//                               status: refreshArray,
//                               amount: amountArray
//                             });
//                           }
//                         }
//                       });
//                     }
//                   });
//                 });
//             }
//             else {
//               let status;
//               if(person.type === 'team'){
//                 status = 'No payment required';
//               }
//               else{
//                 status = 'TXN_FAILURE'; // 'TXN_FAILURE'
//               }
//               refreshArray.push(status);
//               amountArray.push(1);
//               if(refreshArray.length === result.length) {
//                 console.log('statusArray-- > ', status);
//                 console.log('amount-- > ', amountArray);
//                 return res.status(200).json({
//                   success: true,
//                   data: result,
//                   status: refreshArray,
//                   amount: amountArray
//                 });
//               }
//             }
//           });
//       }
//
//     })
//     .catch(error => {
//       console.log(error);
//       // throw new error;
//     });
// });


// router.get('/hello', (req,res) => {
//   Captain.find()
//     .then(result=> {
//       // console.log(result);
//       result.forEach(libId => {
//         const lower = libId.libId.toUpperCase();
//         // console.log(lower);
//         Captain.updateOne({_id: libId._id}, {
//           $set: {
//             libId: lower
//           }
//         },(err,result) => {
//           console.log(result);
//         });
//       });
//     })
//     .catch(error => {
//       // throw new error
//       }
//     );
// });

module.exports = router;
