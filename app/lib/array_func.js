var me = module.exports


me.additem = function (array, name, hostname, port, username) {
    //<should be functionized in array_func)
    array.push({
        "name": name,
        "hostname": hostname,
        "port": port,
        "username": username
    });
    return array
}


me.removeitems = function(array, nameLookUp) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].name === nameLookUp)
            array.splice(i, 1);
    }
    return array;
};



me.sortitems = function (array,property) {
    array.sort(function compare(a, b) {
        if (a[property] > b[property]) {
            return 1;
        }
        if (a[property] < b[property]) {
            return -1;
        }
        return 0;
    });
    return array
}
