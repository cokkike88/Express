var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send("Hello World");
});

app.get('/usuarios', (req, res) => {
    res.send({usuarios: ["jorge", "carlos", "Juan"]})
});

app.listen(3000);