const express = require('express');
const server = express();
const Port = 4000;

server.get('/', function (req, resp) {

    resp.send("helilo12");
})





server.listen(Port, console.log("Starting Server here in Port " + Port));


