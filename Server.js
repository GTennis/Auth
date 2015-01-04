/**
 * Created by gytenis on 1/4/15.
 */
/// <reference path="node.d.ts" />
var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ port: 8000 });
var allRoutes = require('./Routes/AllRoutes');
server.route(allRoutes);
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
//# sourceMappingURL=Server.js.map