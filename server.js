const express = require("express")
const axios = require("axios")
const app = express()
const { PORT, URL } = require("./utils")

app.listen(PORT || 3000)

app.set("view engine", "ejs")

app.use(express.static(__dirname + "/public"))

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(URL)
        const world = response.data
        const worldString = JSON.stringify(world)
        res.render("index", { item: worldString })      
    } catch (error) {  
        res.render("error")      
    }               
})

app.get("/continents", (req, res) => {
    res.render("continents")
})

app.get("/countries", (req, res) => {
    res.render("countries")
})