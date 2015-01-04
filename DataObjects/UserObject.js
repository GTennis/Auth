/**
 * Created by gytenis on 1/4/15.
 */
var UserObject = (function () {
    /*constructor(public firstname, public middleinitial, public lastname, public email) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }*/
    function UserObject(json) {
        var jsonData = JSON.parse(json);
        this.firstname = jsonData['firstName'];
        this.lastname = jsonData['lastName'];
    }
    UserObject.prototype.json = function () {
        return JSON.stringify(this);
    };
    UserObject.prototype.fullname = function () {
        return this.firstname + " " + this.lastname;
    };
    return UserObject;
})();
module.exports = UserObject;
//# sourceMappingURL=UserObject.js.map