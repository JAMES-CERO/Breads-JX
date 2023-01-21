//Dependencies
const express = require("express")
const app = express()

//Conf
require("dotenv").config()
const PORT = process.env.PORT

//MIDDLEWARE

app.set("views", __dirname + "/views")
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())


//Routes
app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>")
})

//Breads
const breadsController = require("./controllers/breads_controller")
app.use("/breads", breadsController)


//Listen
app.listen(PORT, () => {
    console.log("I am Awake", PORT)
})
