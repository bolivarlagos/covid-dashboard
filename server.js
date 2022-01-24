const express = require("express")
const axios = require("axios")
const app = express()
const { PORT } = require("./utils")
const routings = require("./routings/routings")

app.listen(PORT || 3000)

app.set("view engine", "ejs")

app.use(express.static(__dirname + "/public"))

app.use("/", routings)
