'use strict';
var mongoose=require('mongoose');

var Users=require('../models/user').Users;

exports.signup= function (req,res) {
      var user=new Users({
          _id: new mongoose.Types.ObjectId(),
          email: req.body.email,
          password: req.body.password
      });
};

exports.login= function (req,res) {

};