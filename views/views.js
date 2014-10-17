var me = module.exports

me.editview = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
 '</head>' +
    '<body>' +
    '<h3>Create New Configuration</h3>' +
    '<form action="/create" method="post">' +
    //'<textarea name="text" rows="20" cols="60"></textarea><br>' +
    '<table>' +
    '<tr>' + '<td>' + 'Name:'+ '</td>' + '<td>' + '<input type="text" name="name"><br>' + '</td>' + '</tr>' +
    '<tr>' + '<td>' + 'Host Name:' + '</td>' + '<td>' + ' <input type="text" name="hostname"><br>' + '</td>' + '</tr>' +
    '<tr>' + '<td>' + 'Port:' + '</td>' + '<td>' + ' <input type="text" name="port"><br>' + '</td>' + '</tr>' +
    '<tr>' + '<td>' + 'User Name:' + '</td>' + '<td>' + ' <input type="text" name="username"><br>' + '</td>' + '</tr>' +
    '</tr>' +
    '</table>'+
    '<input type="submit" value="Add Item" />' +
    '</form>' +
    '<br>' +
    '<h3>Delete Configuration</h3>' +
    '<form action="/deleter" method ="post"> ' +
    '<table>' +
    '<tr>' + '<td>' + 'Name:' + '</td>' + '<td>' + ' <input type="text" name="deletename">' + '</td>' + '</tr>' +
    '</table>' +
     '<input type="submit" value="Delete Host" />' +
    '</form>' +
     '<br>' +
     '<h3>Sort Configurations</h3>' +
     '<form action="/sorter" method ="post"> ' +
     '<table>' +
    '<tr>' + '<td>' + 'Sort By:' + '</td>' + '<td>' + ' <select Name="sortitem"> ' +
  '<option value="name">Name</option>'+
  '<option value="hostname">Host name</option>'+
  '<option value="port">Port</option>'+
  '<option value="username">User name</option>'+
'</select>' + '</td>' + '</tr>' +
     '<tr>' + '<td>' + '<input type="radio" name="sortdirection" value="asc">ASC<br>' +
    '<input type="radio" name="sortdirection" value="desc">DESC' + '</td>' + '</tr>' +
    '</table>' +
     '<br>' +
     '<input type="submit" value="Sort" />' +
    '</form>' +
     '</br>' +
    '</br>' +
    '<form action="/logout" method ="post"> ' +
    '<input type="submit" value="Logout" />' +
    '</form>' +
     '</br>' +
     '</br>' +
    '<form action="/editform" method ="post"> ' +
    '<input type="hidden" name="file" value="2">' +
    '<input type="submit" value="2x" />' +
    '</form>' +
    '</br>' +
    '<form action="/editform" method ="post"> ' +
    '<input type="hidden" name="file" value="10x">'+
    '<input type="submit" value="10x" />' +
    '</form>' +
    '</body>' +
    '</html>';

