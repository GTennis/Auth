/**
 * Created by gytenis on 1/4/15.
 */

import UserObject = require('../DataObjects/UserObject');
import UsersObject = require('../DataObjects/UsersObject');

class UserModel {ß

    public

    getUserList() : string {

        var userJsonString1 = '{"firstName" : "Gytenis", "lastName" : "Mikulenas"}';
        var user1 = new UserObject(userJsonString1);

        var userJsonString2 = '{"firstName" : "Tadas", "lastName" : "Valaitis"}';
        var user2 = new UserObject(userJsonString2);

        var users = new UsersObject('');
        users.list = [].concat(user1, user2);

        return users.allUserNames();
    }

    getUserDetails() : string {

        var userJsonString = '{"firstName" : "Gytenis", "lastName" : "Mikulenas"}';
        var user = new UserObject(userJsonString);

        return user.fullname();
    }
}

export = UserModel;