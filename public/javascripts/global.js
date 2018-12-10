var express = require('express');
var $ = require('jquery');
var allUsers = [];

$.ready(function(){
    populate();
});

function populate(){
    $.getJSON('/signup/users', function(data){
        $.each(data, function(){
            allUsers = data;
        });
    });
};

module.exports = allUsers;