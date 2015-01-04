/**
 * Created by gytenis on 1/4/15.
 */

/// <reference path="../node.d.ts" />

import ParsableInterface = require('ParsableInterface');
import UserObject = require('UserObject');

interface UsersInterface extends ParsableInterface{

    list : UsersInterface[];
}

class UsersObject implements UsersInterface {

    public

        list : UsersInterface[];

    constructor() {

    }

    allUserNames() {

        var userNames : string;
        userNames = '';

        this.list.forEach(function(user) {

            var userObject = <UserObject>user;
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