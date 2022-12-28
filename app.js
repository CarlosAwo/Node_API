const express = require ("express")
const app = express()
/**------------------------------------------------------------------------------------------------------- */

const ROUTES = require("./routes")
const MIDDLEWARES = require("./middlewares")
const port = 3000
const baseUrl = `http://localhost:${port}`
const {sequelize,InitDB , PokemonModel} = require("./db")



InitDB()

MIDDLEWARES(app)

ROUTES(app)
app.listen(port     , ()=>{console.log( `Server started at ${baseUrl}`)})