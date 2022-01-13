const express = require("express")
const axios = require("axios")
const app = express()
const { PORT, URL } = require("./utils")

app.listen(PORT || 3000)

app.set("view engine", "ejs")

app.use(express.static(__dirname + "/public"))

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${URL}/api/world`)
        const world = response.data
        const worldString = JSON.stringify(world)
        res.render("world", { title: "world", item: worldString })      
    } catch (error) {  
        res.render("error")      
    }               
})

app.get("/continents", async (req, res) => {
    try {
        const response = await axios.get(`${URL}/api/continents`)
        const continents = response.data 
        const continentsString = JSON.stringify(continents)
        res.render("continents", { title: "continents", item: continentsString })
    } catch (error) {
        res.render("error")        
    }
})

app.get("/countries", async (req, res) => {
    try {
        const response = await axios.get(`${URL}/api/countries`)
        const countries = response.data 
        const countriesString = JSON.stringify(countries)
        res.render("countries", { title: "countries", item: countriesString })
    } catch (error) {
        res.render("error")        
    }
})