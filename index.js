const express = require("express")
let app = express();


//setup handlebars
let handlebars = require("express-handlebars").create({
    defaultLayout: "main"
});
app.engine("handlebars",handlebars.engine);
app.set("view engine","handlebars");
app.set("port", process.env.PORT || 3000);


//setup user defined libraries
const main = require("./controllers/main.js");



//routes
app.get('/', main.root);



//404 route
app.use(function (req,res) {
    res.status(404);
    res.render("404");
});

//500 error handler
app.use(function (req,res) {
    console.error(err.stack);
    res.status(500);
    res.render("500");
});


//listen for incoming requests
app.listen(app.get("port"), function() {
    console.log("Started express on port " + app.get("port"));
});