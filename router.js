var express = require("express");
var router = express.Router();

const credentials = {
    email: "admin@gmail.com",
    password: "admin123"
}
//Login user
router.post('/success', (req,res) => {
    if(req.body.email == credentials.email && req.body.password == credentials.password){
        req.session.user = req.body.email;
        res.end("Login Succcessful")
    }else {
        res.end("invalid credentials")
    }
  })

  module.exports = router
