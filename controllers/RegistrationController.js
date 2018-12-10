var express = require('express');
//var globalvar = require('../public/javascripts/global');
var $ = require('jquery');

module.exports = function userRegistration() {

    this.test = function (req, res) {
        let db = req.db;
        let collection = db.get('usercollection');
    };


    this.addUser = function(req, res){
        let db = req.db;
        let collection = db.get('usercollection');
        collection.insert(req.body, function(err, result){
            res.send(
                (err===null)? {msg:'successfull'} : {msg:err}
            );
        });
    }


    this.getAllUsers = function (req, res) {
        let db = req.db;
        let collection = db.get('usercollection');
            
        collection.find({},{}, function(e,docs){
            res.json(docs);
        });
    }

    this.findUser = function(req){
        let db = req.db;
        collection = db.get('usercollection');

        let mailId = req.body["user_email"];
        let pass = req.body["user_pass"];
        let userData = [];

        collection.find({ "user_email" : mailId, "user_pass" : pass}, {}, function(err, item){
            if(item != null)
                res.send(item);
        });

        //var data = myCursor.hasNext() ? myCursor.next() :  null;

        /* if(userData)
            return userData._id;
        else return null; */
    }
}

//module.exports = userRegistration;