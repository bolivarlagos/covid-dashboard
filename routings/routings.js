const express = require("express")
const router = express.Router()
const controllers = require("../controllers/controllers")

router.get("/world", controllers.worldController)
router.get("/continents", controllers.continentsController)
router.get("/countries", controllers.countriesController)

module.exports = router 
