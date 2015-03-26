/**
 * Created by gytenis on 1/4/15.
 */

import UserModel = require('../Models/UserModel');

var userModel = new UserModel;

module.exports = [

    // Get user list
    {
        method: 'GET',
        path: '/users',
        handler: function (request, reply) {

            // Used from Hapi 8.0.0 spec:
            // http://hapijs.com/api/8.0.0#reply-interface
            
            var response = reply(userModel.getUserList() + '. headers: ' + JSON.stringify(request.headers) + '. query params: ' + JSON.stringify(request.query));            
            response.type('application/json');
            response.header('cache-control', 'max-age=2');
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