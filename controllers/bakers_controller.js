// dependencies

const express = require("express")
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed')
const breads = require("./breads_controller.js")

//Index
baker.get("/", (req, res) => {
     Baker.find().populate("breads ")
     .then(foundBakers => {
         res.send(foundBakers)
     })
 })

// Show: 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate({
            path: "breads",
            options: {limit: 10}
        })
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})

// delete
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id) 
      .then(deletedBaker => { 
        res.status(303).redirect('/breads')
      })
})

               
baker.get('/data/seed', async (req, res) => {
    await Baker.insertMany(bakerSeedData)
        res.redirect('/breads')
})





module.exports = baker 