var querystring = require('querystring');
var fs = require('fs');
var af = require('../app/lib/array_func');
var vwz = require('../views/views');



function getfile(hostnum) {
    if (hostnum == '10x') {
        file = './app/json/host10x.json';
    } else {
 
        file = './app/json/host2.json';
    }
    return file;
}




function editform(response, postData) {

    console.log("Request handler 'editform' was called.");
    var file =''
    var file = getfile(querystring.parse(postData).file);

    var text = fs.readFileSync(file, 'utf8');
    console.log(text);

    var body = vwz.editview
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body + text);
    response.end();
}





function create(response, postData) {

    console.log("Request handler 'create' was called.");

    var jsonStr = fs.readFileSync(file, 'utf8');

    var obj = JSON.parse(jsonStr);

    var array = af.additem(obj['configurations'],
    querystring.parse(postData).name,
    querystring.parse(postData).hostname,
    querystring.parse(postData).port,
    querystring.parse(postData).username);

    jsonStr = JSON.stringify(array);

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(jsonStr);
    response.end();

}





function deleter(response, postData) {

    console.log("Request handler 'deleter' was called.");

    var jsonStr = fs.readFileSync(file, 'utf8');
    var obj = JSON.parse(jsonStr);

    var itemsremoved = af.removeitems(obj['configurations'], querystring.parse(postData).deletename);

    jsonStr = JSON.stringify(itemsremoved);

    console.log("Request handler 'deleter' was called.");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(jsonStr);
    response.end();

}





function sorter(response, postData) {

    console.log("Request handler 'sorter' was called.");

    var jsonStr = fs.readFileSync(file, 'utf8');
    var obj = JSON.parse(jsonStr);
    var property = querystring.parse(postData).sortitem;

    sortedarray = af.sortitems(obj['configurations'],property);


    if (querystring.parse(postData).sortdirection == "desc") {
        obj['configurations'].reverse();
    } else { }

    jsonStr = JSON.stringify(sortedarray);

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(jsonStr);
    response.end();


}



function logout(response, postData) {

    response.writeHead(401, { "Content-Type": "text/html" });
    response.write("You are logged out");
    response.end();
      }




exports.editform = editform;
exports.create = create;
exports.deleter = deleter;
exports.sorter = sorter;
exports.logout = logout;


