/**
 * Created by gytenis on 1/3/15.
 */
/// <reference path="node.d.ts" />

import http = require('http');

class Student {
    fullname : string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person : Person) {
    return "Hello..., " + person.firstname + " " + person.lastname;
}

var user = new Student("Jane", "M.", "User");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(greeter(user) + '\n');
}).listen(8000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8000/');
