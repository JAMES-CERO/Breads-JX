const express = require("express")
const { title } = require("process")
const bread = require("../models/bread.js")
const breads = express.Router()
const Bread = require("../models/bread.js")

//INDEX
breads.get("/", (req, res) => {
    res.render("index", 
        {
            breads: Bread,
            title: "Index Page"
        })
    // res.send(Bread)
})

//SHOW
// breads.get("/:arrayIndex", (req, res) => {
//     // res.send(Bread[req.params.arrayIndex])
//    if (Bread[req.params.arrayIndex]){
//         res.render("Show", {
//             bread: Bread[req.params.arrayIndex]
//         })
//    } else { 
//         res.send("404")
//    }
// })

breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:Bread[req.params.arrayIndex]
      })
    } else {
      res.send('404')
    }
  })
  




//Export
module.exports = breads