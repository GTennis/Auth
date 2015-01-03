/**
 * Created by gytenis on 1/3/15.
 */
/// <reference path="node.d.ts" />
var http = require('http');
var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
})();
function greeter(person) {
    return "Hello..., " + person.firstname + " " + person.lastname;
}
var user = new Student("Jane", "M.", "User");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(greeter(user) + '\n');
}).listen(8000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8000/');
//# sourceMappingURL=server.js.map