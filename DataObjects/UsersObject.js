/**
 * Created by gytenis on 1/4/15.
 */
var UsersObject = (function () {
    function UsersObject() {
    }
    UsersObject.prototype.allUserNames = function () {
        var userNames;
        userNames = '';
        this.list.forEach(function (user) {
            var userObject = user;
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
//# sourceMappingURL=UsersObject.js.map