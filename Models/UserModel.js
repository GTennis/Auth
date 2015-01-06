/**
 * Created by gytenis on 1/4/15.
 */
var UserObject = require('../DataObjects/UserObject');
var UsersObject = require('../DataObjects/UsersObject');
var UserModel = (function () {
    function UserModel() {
    }
    UserModel.prototype.getUserList = function () {
        var userJsonString1 = '{"firstName" : "Gytenis", "lastName" : "Mikulenas"}';
        var user1 = new UserObject(userJsonString1);
        var userJsonString2 = '{"firstName" : "Tadas", "lastName" : "Valaitis"}';
        var user2 = new UserObject(userJsonString2);
        var users = new UsersObject('');
        users.list = [].concat(user1, user2);
        return users.allUserNames();
    };
    UserModel.prototype.getUserDetails = function () {
        var userJsonString = '{"firstName" : "Gytenis", "lastName" : "Mikulenas"}';
        var user = new UserObject(userJsonString);
        return user.fullname();
    };
    return UserModel;
})();
module.exports = UserModel;
