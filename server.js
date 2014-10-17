var http = require("http");
var auth = require("http-auth");
var url = require("url");
var router = require("./router");

//init Authenication
var basic = auth.basic({
    file: __dirname + '/app/auth/htpasswd'
});


//start server

function start(route, handle) {
    function onRequest(request, response) {
         var postData = "";
         var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        
         request.setEncoding("utf8");
        
         request.addListener("data", function(postDataChunk) {
             postData += postDataChunk;
             console.log("Received POST data chunk '"+
             postDataChunk + "'.");
             });
        
         request.addListener("end", function() {
             route(handle, pathname, response, postData);
             });
        
         }
    http.createServer(basic, onRequest).listen(8888);
    console.log("Server has started.");
}


exports.start = start;


