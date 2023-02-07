const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    res.send("Server is live.");
});

app.listen(3000, function(){
    console.log("Server is started on the port 3000.");
});