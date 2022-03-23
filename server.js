const express = require('express');
const path = require("path")
const app = express();
const bodyparser = require("body-parser")
const PORT = process.env.PORT || 3000;
const session = require("express-session");
const { v4:uuidv4 } = require("uuid")

const router = require("./router")

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

app.use(express.static("public"));

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}))

app.use('/route', router)

app.set("view engine", "ejs");

//home route
app.get("/", (req,res) => {
    res.render("base", { titl: "Login System"});
})

app.listen(PORT, () => {
    console.log("Listening to server on", PORT)
}) 