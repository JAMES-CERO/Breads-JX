//Dependencies
const express = require("express")
const app = express()

//Conf
require("dotenv").config()
const PORT = process.env.PORT


//Routes
app.get("/", (req, res) => {
    res.send("<h1>I WANT CONCHA</h1>")
})

//Breads
const breadsController = require("./controllers/breads_controller")
app.use("/breads", breadsController)


//Listen
app.listen(PORT, () => {
    console.log("I am Awake", PORT)
})
