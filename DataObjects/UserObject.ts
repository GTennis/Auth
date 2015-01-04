/**
 * Created by gytenis on 1/4/15.
 */

/// <reference path="../node.d.ts" />

import ParsableInterface = require('ParsableInterface');

interface UserInterface extends ParsableInterface{

    firstname : string;
    lastname : string;
    email : string;
}

class UserObject implements UserInterface {

    public

    firstname : string;
    lastname : string;
    email : string;

    /*constructor(public firstname, public middleinitial, public lastname, public email) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }*/

    constructor(json : string) {

        var jsonData = JSON.parse(json);
        this.firstname = jsonData['firstName'];
        this.lastname = jsonData['lastName'];
    }

    json () {

        return JSON.stringify(this);
    }

    fullname() : string {

        return this.firstname + " " + this.lastname;
    }

    private

    // ...
}

export = UserObject;