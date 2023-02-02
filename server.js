//Dependencies
const express = require("express")
const app = express()
const methodOverride = require('method-override')
const mongoose = require("mongoose")


//Conf
require("dotenv").config()
const PORT = process.env.PORT


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mango: ', process.env.MONGO_URI) }
  )
  


//MIDDLEWARE

app.set("views", __dirname + "/views")
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))


//Routes
app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>")
})

//Breads
const breadsController = require("./controllers/breads_controller")
app.use("/breads", breadsController) 
// this gives the bread the path /breads

//Bakers
const bakersControlller = require("./controllers/bakers_controller")
app.use("/bakers", bakersControlller)

//404 page
app.get("*", (req, res) => {
    res.send("404")
})


//Listen
app.listen(PORT, () => {
    console.log("I am Awake", PORT)
})
