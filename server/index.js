const express = require('express');
const server = express();
const Port = 5000;

server.get('/', function (req, resp) {

  resp.json({ "name ": "bisam chap" });
})





server.listen(Port, console.log("Starting Server here in Port " + Port));


