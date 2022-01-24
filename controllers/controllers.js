const { URL } = require("../utils")
const axios = require("axios")

module.exports.worldController = async (req, res) => {
    try {
        const response = await axios.get(`${URL}/api/world`)
        const world = response.data
        const worldString = JSON.stringify(world)
        res.render("world", { title: "world", item: worldString })      
    } catch (error) {  
        res.render("error")      
    }  
}

module.exports.continentsController = async (req, res) => {
    try {
        const response = await axios.get(`${URL}/api/continents`)
        const continents = response.data 
        const continentsString = JSON.stringify(continents)
        res.render("continents", { title: "continents", item: continentsString })
    } catch (error) {
        res.render("error")        
    }
}

module.exports.countriesController = async (req, res) => {
    try {
        const response = await axios.get(`${URL}/api/countries`)
        const countries = response.data 
        const countriesString = JSON.stringify(countries)
        res.render("countries", { title: "countries", item: countriesString })
    } catch (error) {
        res.render("error")        
    }
}