const express = require("express")
const { title } = require("process")
const bread = require("../models/bread.js")
const breads = express.Router()
const Bread = require("../models/bread.js")

//INDEX
breads.get('/', (req, res) => {
  Bread.find()
      .then(foundBreads => {
        console.log(foundBreads)
          res.render('index', {
              breads: foundBreads,
              title: 'Index Page'
          })
      })
})



//NEW 

breads.get("/new", (req, res) => {
  res.render("new")
})

//EDIT

breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id) 
    .then(foundBread => { 
      res.render('edit', {
        bread: foundBread 
      })
    })
})


// SHOW
//get
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBread => {
          res.render('show', {
              bread: foundBread
          })
      })
      .catch( err => {
        res.send(" Sorry we cound find the page - Error 404")
      })
})




//CREATE

breads.post("/", (req, res) => {

  if (!req.body.image) {
    req.body.image = undefined
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect("/breads")
})


// DELETE
breads.delete('/:id', async (req, res) => {
   await Bread.findByIdAndDelete(req.params.id)
    res.status(303).redirect('/breads')
    
  })
  


// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true})
  .then(updatedBread => {
    console.log(updatedBread)
    res.redirect(`/breads/${req.params.id}`)
  })
})





//Export
module.exports = breads;
