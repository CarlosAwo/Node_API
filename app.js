const express = require ("express")
const morgan = require ("morgan")
const app = express()

const pokemons = require("./data")
const port = 8000
const baseUrl = `http://localhost:${port}`


app.use(morgan('dev'))
app.get("/", (req,res)=>{
    res.send("Welcome Sir !!!")
})

app.get("/api/pokemons", (req,res)=>{
    let msg =  "Aucun Pokemon n'a été trouvé"
    if(pokemons.length !=0 ){msg =`Nous avons trouvé  ${pokemons.length} pokemons`    }
    const result = {
        msg:msg,
        data:pokemons
    }
    res.json(result)
})

app.get("/api/pokemons/:id", (req,res)=>{
    let id = req.params.id
    let msg =  "Aucun Pokemon n'a été trouvé"
    let pokemon = null
    pokemons.forEach(
        (child)=>{
            if(child.id == id)
            pokemon = child
        }
    )
    if(pokemon != null){msg = `Nous avons trouvé le Pokemon ${id}`}
    const result = {
        msg:msg,
        data:pokemon
    }
    res.json(result)
})

app.listen(port     , ()=>{console.log( `Server started at ${baseUrl}`)})