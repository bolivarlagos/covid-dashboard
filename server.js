const express = require("express")
const axios = require("axios")
const app = express()
const { PORT, URL } = require("./utils")

app.listen(PORT || 3000)

app.set("view engine", "ejs")

app.use(express.static(__dirname + "/public"))

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${URL}/api/countries/`)
        const countries = response.data  
        res.render("index", { countries })      
    } catch (error) {  
        res.render("error")      
    }               
})