const express = require("express")
const { title } = require("process")
const breads = express.Router()
const Bread = require("../models/bread.js")
const Baker = require("../models/baker.js")

//INDEX
breads.get('/', (req, res) => {
  Baker.find()
  .then( foundBakers => {
  Bread.find()
    .then(foundBreads => {
      res.render('index', {
        breads: foundBreads,
        bakers: foundBakers,
        title: 'Index Page'
      })
    })
  })
})



//NEW 

breads.get("/new", (req, res) => {
  Baker.find()
  .then(foundBakers => {
    res.render("new", {
      bakers:foundBakers
    })
  })
  
})

//EDIT

breads.get('/:id/edit', (req, res) => {
  Baker.find()
    .then(foundBakers => {
      Bread.findById(req.params.id)
        .then(foundBread => {
          res.render('edit', {
            bread: foundBread,
            bakers: foundBakers
          })
        })
    })
})


// SHOW
//get
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
    .populate("baker")
    .then(foundBread => {
      const bakedBy = foundBread.getBakedBy()
      // console.log(bakeBy)
      res.render('show', {
        bread: foundBread
      })
    })
    .catch(error => {
      res.send(" Sorry we cound find the page - Error 404")
    })
})




//CREATE

breads.post("/", async (req, res) => {

  if (!req.body.image) {
    req.body.image = undefined
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  await Bread.create(req.body)
  res.redirect("/breads")

  // Bread.create(req.body).then(() => res.redirect("/breads")).catch(res.send("You are a Fool"));
})


// DELETE
breads.delete('/:id', async (req, res) => {
  await Bread.findByIdAndDelete(req.params.id)
  res.status(303).redirect('/breads')

})



// UPDATE
breads.put('/:id', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedBread => {
      console.log(updatedBread)
      res.redirect(`/breads/${req.params.id}`)
    })
})





//Export
module.exports = breads;
