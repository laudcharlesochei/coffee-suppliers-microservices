/* const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const supplier = require("./app/controller/supplier.controller");
const app = express();
const mustacheExpress = require("mustache-express")
const favicon = require('serve-favicon');

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.options("*", cors());
app.engine("html", mustacheExpress())
app.set("view engine", "html")
app.set("views", __dirname + "/views")
app.use(express.static('public'));
app.use(favicon(__dirname + "/public/img/favicon.ico"));

// list all the suppliers
app.get("/", (req, res) => {
    res.render("home", {});
});
app.get("/suppliers/", supplier.findAll);
// show the add suppler form
app.get("/supplier-add", (req, res) => {
    res.render("supplier-add", {});
});
// receive the add supplier POST
app.post("/supplier-add", supplier.create);
// show the update form
app.get("/supplier-update/:id", supplier.findOne);
// receive the update POST
app.post("/supplier-update", supplier.update);
// receive the POST to delete a supplier
app.post("/supplier-remove/:id", supplier.remove);
// handle 404
app.use(function (req, res, next) {
    res.status(404).render("404", {});
})


// set port, listen for requests
const app_port = process.env.APP_PORT || 80
app.listen(app_port, () => {
    console.log(`Server is running on port ${app_port}.`);
});

*/


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const supplier = require("./app/controller/supplier.controller");
const app = express();
const mustacheExpress = require("mustache-express")
const favicon = require('serve-favicon');

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.options("*", cors());
app.engine("html", mustacheExpress())
app.set("view engine", "html")
app.set("views", __dirname + "/views")
app.use(express.static('public'));
app.use(favicon(__dirname + "/public/img/favicon.ico"));

// list all the suppliers - ADMIN ROUTES
app.get("/admin", (req, res) => {  // ← CHANGED: /admin (not /admin/)
    res.render("home", {});
});
app.get("/admin/suppliers/", supplier.findAll);  // ← CHANGED: Added /admin prefix

// show the add supplier form
app.get("/admin/supplier-add", (req, res) => {  // ← CHANGED: Added /admin prefix
    res.render("supplier-add", {});
});

// receive the add supplier POST
app.post("/admin/supplier-add", supplier.create);  // ← CHANGED: Added /admin prefix

// show the update form
app.get("/admin/supplier-update/:id", supplier.findOne);  // ← CHANGED: Added /admin prefix

// receive the update POST
app.post("/admin/supplier-update", supplier.update);  // ← CHANGED: Added /admin prefix

// receive the POST to delete a supplier
app.post("/admin/supplier-remove/:id", supplier.remove);  // ← CHANGED: Added /admin prefix

// handle 404
app.use(function (req, res, next) {
    res.status(404).render("404", {});
})


// set port, listen for requests
// Changed from port 80 to 8081 for local testing (will change to 8080 for ECS later)
//const app_port = process.env.APP_PORT || 8081
const app_port = process.env.APP_PORT || 8080
app.listen(app_port, () => {
    console.log(`Coffee suppliers employee microservice is running on port ${app_port}.`);
});