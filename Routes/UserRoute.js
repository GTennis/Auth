/**
 * Created by gytenis on 1/4/15.
 */
/// <reference path="../node.d.ts" />
var UserModel = require('../Models/UserModel');
var userModel = new UserModel;
module.exports = [
    { method: 'GET', path: '/users', handler: function (request, reply) {
        reply(userModel.getUserList());
    } },
    { method: 'GET', path: '/users/{id}', handler: function (request, reply) {
        reply(userModel.getUserDetails());
    } }
];
//# sourceMappingURL=UserRoute.js.map