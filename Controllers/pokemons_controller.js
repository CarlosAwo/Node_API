const pokemons = require("../data")
class Pokemon {
    static index (req,res){
        let msg =  "Aucun Pokemon n'a été trouvé"
        if(pokemons.length !=0 ){msg =`Nous avons trouvé  ${pokemons.length} pokemons`    }
        const result = {
            msg:msg,
            data:pokemons
        }
        res.json(result)
    }

    static show(req,res){
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
    }

    static create(req,res){
        let pokemonToCreate = {
            id:pokemons.length+1,
            ...req.body,
            created:new Date()
        }
        pokemons.push(pokemonToCreate)
            res.send(pokemonToCreate)
    }

    static update(req,res){
        let id = req.params.id
        let pokemonDataSent = {...req.body}
        let msg =  "Le pokémon "+id +" n'a pas été retrouvé"
        let isPokemonPresent = false

        pokemons.forEach(
            (child)=>{
                if(child.id == id){
                    child = Object.assign(child, pokemonDataSent);
                    pokemonDataSent = child
                    isPokemonPresent = true
                }
            }
        )
        if(isPokemonPresent){msg = `Nous avons modifié le Pokemon ${id}`}
        const result = {    msg:msg, data:pokemonDataSent }
        res.json(result)
    }

    static destroy(req,res){
           let id = req.params.id
           let msg = "Le pokémon "+id+" n'a pas été supprimé"
            let indexOfElement = null

            pokemons.forEach((child , index)=>{ if(child.id == id){ indexOfElement = index}})
            if(indexOfElement != null){msg = `Nous avons supprimé le Pokemon ${id}`}

            const data = pokemons.splice(indexOfElement, 1);
            const result = {    msg:msg , data:data }
            res.json(result)
    }

    
}

module.exports = Pokemon