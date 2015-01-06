/**
 * Created by gytenis on 1/4/15.
 */
var UsersObject = (function () {
    function UsersObject(json) {
        // ...
    }
    UsersObject.prototype.allUserNames = function () {
        var userNames = '';
        var userObject;
        this.list.forEach(function (user) {
            userObject = user;
            userNames += userObject.firstname + ', ';
        });
        return userNames;
    };
    UsersObject.prototype.json = function () {
        return JSON.stringify(this);
    };
    return UsersObject;
})();
module.exports = UsersObject;
