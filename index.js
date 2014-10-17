var server = require("./server");
var router = require("./router");
var requestHandlers = require("./routes/routes");

var handle = {};
handle["/"] = requestHandlers.editform;
handle["/editform"] = requestHandlers.editform;
handle["/create"] = requestHandlers.create;
handle["/deleter"] = requestHandlers.deleter;
handle["/sorter"] = requestHandlers.sorter;
handle["/logout"] = requestHandlers.logout;


server.start(router.route, handle);