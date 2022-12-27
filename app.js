const express = require ("express")
const morgan = require ("morgan")
const favicon = require ("serve-favicon")
const bodyParser = require("body-parser")
const app = express()

const pokemons = require("./data")
const Pokemon  = require("./Controllers/pokemons_controller")
const port = 3000
const faviconPath = __dirname + "/favicon.ico"
const baseUrl = `http://localhost:${port}`


app
    .use(favicon(faviconPath ))
    .use(morgan('dev'))
    .use(bodyParser.json())
app.get("/", (req,res)=>{
    res.send("Welcome Sir !!!")
})

app.get("/api/pokemons", Pokemon.index)

app.get("/api/pokemons/:id",  Pokemon.show)

app.post("/api/pokemons",  Pokemon.create)

app.put("/api/pokemons/:id",  Pokemon.update)

app.delete("/api/pokemons/:id",  Pokemon.destroy)

app.get("*" , (req,res)=> res.send("Routes Error") )

app.listen(port     , ()=>{console.log( `Server started at ${baseUrl}`)})