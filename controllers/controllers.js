const { URL } = require("../utils")
const axios = require("axios")

const getSpecificPage = async (req, res) => {
    try {
        const pageURL = req.url.slice(1)
        const response = await axios.get(`${URL}/api/${pageURL}`)
        const responseData = await response.data 
        const responseString = JSON.stringify(responseData)
        res.render(pageURL, { title: pageURL, item: responseString })
    } catch (error) {
        res.render("error")        
    }
}

module.exports.worldController = (req, res) => getSpecificPage(req, res)
module.exports.continentsController = (req, res) => getSpecificPage(req, res)
module.exports.countriesController = (req, res) => getSpecificPage(req, res)
