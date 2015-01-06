/**
 * Created by gytenis on 1/4/15.
 */

import IParsable = require('IParsable');
import UserObject = require('UserObject');

interface IUsersObject extends IParsable{

    list : UserObject[];
}

class UsersObject implements IUsersObject {

    public

        list : UserObject[];

    constructor(json : string) {

        // ...
    }

    allUserNames() {

        var userNames : string = '';
        var userObject : UserObject;

        this.list.forEach(function(user : any) {

            userObject = <UserObject>user;
            userNames += userObject.firstname+ ', ';
        });

        return userNames;
    }

    json () {

        return JSON.stringify(this);
    }

    private

    // ...
}

export = UsersObject;