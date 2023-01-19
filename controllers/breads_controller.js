const express = require("express")
const breads = express.Router()

//INDEX
breads.get("/", (req, res) => {
    res.send("This is the index at /Breads ")

})





//Export
module.exports = breads