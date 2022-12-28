const { PokemonModel } = require("../db")


class Pokemon {
    static index (req,res){
        PokemonModel.findAll({order:["id"]})
                .then((pokemons)=>{
                    let msg =  "Aucun Pokemon n'a été trouvé"
                    if(pokemons.length !=0 ){msg =`Nous avons trouvé  ${pokemons.length} pokemons`    }
                    const result = {    msg,data:pokemons   }
                    res.json(result)
                })
    }

    static show(req,res){
        let id = req.params.id
        PokemonModel.findByPk(id)
            .then((pokemon)=>{
                let msg =  "Aucun Pokemon n'a été trouvé"
                if(pokemon != null){msg = `Nous avons trouvé le Pokemon ${id}`}
                const result = {msg:msg,data:pokemon}
                res.json(result)
            })

    }

    static create(req,res){
            PokemonModel.create({
                name:req.body.name,
                hp:req.body.hp,
                cp:req.body.cp,
                picture:req.body.picture,
                types:req.body.types
            })
            .then((resp)=>{
                    res.json({resp})
            })
    }

    static update(req,res){
        let id = req.params.id
            PokemonModel.update(
                {
                    name:req.body.name,
                    hp:req.body.hp,
                    cp:req.body.cp,
                    picture:req.body.picture,
                    types:req.body.types
                },
                {where:{id:id}}
            ).then(
                (r)=>{
                    res.json(r)
                }
            )
    }

    static destroy(req,res){
           let id = req.params.id
           PokemonModel.findByPk(id)
           .then((DatabaseResponse)=>{
                if(DatabaseResponse == null){
                    let msg = "le Pokemon "+ id +" n'existe pas"
                    let data = DatabaseResponse
                    return res.json({msg,data})
                }
                PokemonModel.destroy({where:{id:id}})
                .then((DatabaseResponse)=>{
                        let msg = "le Pokemon "+ id +" a ete bien supprimé"
                        res.json({msg})
                })
        })
    }
}

module.exports = Pokemon