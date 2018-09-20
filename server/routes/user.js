const express = require('express');


const router = express.Router();
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const cloudinary = require('cloudinary');
const saltRounds = 15;
const jwt = require('jsonwebtoken');
// const http = require('http');
const axios = require('axios');
const async = require('async');

const captainAuth = require('../model/captain');
const Payment = require('../model/payment');

const APP_KEY = 'SPORTS_18_SJSHUU';
var CUST_ID = '';
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
                    throw new err
                  }
                  Game.updateOne({name: done.game}, {
                    $push: {
                      captainId: done._id
                    }
                  }, (errors, update) => {
                    if(errors) {
                      console.log(errors);
                      throw errors
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
        throw new error
      });
  }
  else{

    if(game.name) {
      Captain.findOne({libId: game.libId, game: game.game})
        .then(result => {
          if(result){
            return res.status(200).json({
              success: false,
              message: 'Player has already registered in same event'
            });
          }
          else{
            const captain = new Captain(game);
            captain.save((err,result) => {
              if(err){
                console.log(err);
                throw err;
              }
              else{
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
                    }, process.env.JWT_KEYS ,
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
        })
        .catch(error => {
          console.log(error);
          throw new error;
        });
    }
    else{
      return res.status(200).json({
        success: false,
        message: 'Wrong LibraryID'
      });
    }
  }
});

router.post('/member', checkAuth , (req,res) => {
  const player = req.body.itemRows;

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
                          throw errors;
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

                        if ((counts['4'] <= game.max_player_year-1) && (counts['3'] <= game.max_player_year) && (counts['2'] <= game.max_player_year)) {
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
                                      throw errors;
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
                          throw errors;
                        }
                        else{
                          return res.status(200).json({
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
              throw err;
            });

        })
        .catch(error => {
          console.log(error);
          throw new error
        });
    }
  }
});

router.get('/keys', checkAuth, (req,res) => {
  CUST_ID = req.userData.userId;

  Captain.findOne({_id: req.userData.userId}, 'name team game type payment_status')
        .then(result => {

          if (result.payment_status.length) {
            const length = result.payment_status.length;
            var last_id = result.payment_status[length - 1];
          }
          else {
            var last_id = null;
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
          throw new error;
        });
});

router.post('/add-captain', (req,res) => {
  const capt = req.body.value;
  AddCaptain.findOne({libId: capt.libId})
    .then(result => {
      if(result) {
        AddCaptain.updateOne({libId: capt.libId}, {
          $set: {
            uniqueId: capt.uniqueId
          }
        }, (err,updated) => {
          if(err){
            console.log(err);
            throw new err;
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
            throw new err;
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
      throw new errors
    });
});

router.post('/login', (req,res) => {
  Captain.findOne({libId: req.body.libId, game: req.body.game})
    .then(team => {
      if (team) {
        const token = jwt.sign({
            libId: req.body.libId,
            userId: team._id,
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
      throw error;
    });
});

router.get('/approval-list', checkAuth, (req,res) => {
  Captain.findOne({_id: req.userData.userId},'name team game type payment_status')
    .then(result => {

      if(result.payment_status.length) {
        const length = result.payment_status.length;
        var last_id = result.payment_status[length - 1];
      }
      else{
        var last_id = null;
      }


      Payment.findOne({_id: last_id})
        .then(pay => {
          if(pay) {
            const status = pay.STATUS;

            return res.status(200).json({
              success: true,
              data: result,
              status: status,
              amount: pay.TXNAMOUNT
            });
          }
          else{
            if(result.type === 'team'){
              var status = 'No payment required';
            }
            else{
              var status = 'TXN_FAILURE';
            }
            return res.status(200).json({
              success: true,
              data: result,
              status: status,
              amount: 1
            });
          }
        });
    })
    .catch(error => {
      console.log(error);
      throw new error;
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
  console.log('paytmData -->>  ',paytmData);
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
          throw new err;
        }
        else {
          Captain.updateOne({_id: sendData.REGISTRATION_ID}, {
            $push: {
              payment_status: done._id
            }
          }, (err, update) => {
            if (err) {
              console.log(err);
              throw new err;
            }
            else {
              if (paytmData.TXNAMOUNT >= 68) {

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
    });

});

router.post('/refresh-event',checkAuth , (req,res) => {
  Captain.findOne({_id: req.userData.userId},'name team game type payment_status')
    .then(result => {

      if(result.payment_status.length) {
        const length = result.payment_status.length;
        var last_id = result.payment_status[length - 1];
      }
      else{
        var last_id = null;
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
                  REGISTRATION_ID:req.userData.userId
                };

                const payment = new Payment(sendData);
                payment.save((err, done) => {
                  if (err) {
                    console.log(err);
                    throw new err;
                  }
                  else {
                    Captain.updateOne({_id: req.userData.userId}, {
                      $push: {
                        payment_status: done._id
                      }
                    }, (err, update) => {
                      if (err) {
                        console.log(err);
                        throw new err;
                      }
                      else {

                        const status = value.data.STATUS;
                        return res.status(200).json({
                          success: true,
                          data: result,
                          status: status,
                          amount: value.data.TXNAMOUNT
                        });

                      }
                    });
                  }
                });
              });
          }
          else {
            if(result.type === 'team'){
              var status = 'No payment required';
            }
            else{
              var status = 'TXN_FAILURE';
            }
            return res.status(200).json({
              success: true,
              data: result,
              status: status,
              amount: 1
            });
          }
        });
    })
    .catch(error => {
      console.log(error);
      throw new error;
    });
});

module.exports = router;
