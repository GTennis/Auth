/**
 * Created by gytenis on 1/4/15.
 */
/// <reference path="../node.d.ts" />

import UserModel = require('../Models/UserModel');

var userModel = new UserModel;

module.exports = [

    // Get user list
    {
        method: 'GET',
        path: '/users',
        handler: function (request, reply) {

            reply(userModel.getUserList());
        }
    },

    // Get user details
    {
        method: 'GET',
        path: '/users/{id}',
        handler: function (request, reply) {

            reply(userModel.getUserDetails());
        }
    }
];