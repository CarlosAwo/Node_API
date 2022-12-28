const { Sequelize , DataTypes } = require('sequelize');
const pokemons = require("./data")
const sequelize = new Sequelize('pokedex', 'ruto', "toru", { host: 'localhost', dialect: 'postgres' });

const PokemonModel = require("./Models/pokemons_models")(sequelize,DataTypes)

const InitDB = ()=>{
    return sequelize.sync({force:true})
         .then(()=>{
            console.log("la base de donné a bien été synchronisé, les modifications ont été prises en compte")
            pokemons.forEach((pok)=>{
                PokemonModel.create({
                    name:pok.name,
                    hp:pok.hp,
                    cp:pok.cp,
                    picture:pok.picture,
                    types: pok.types
                }).then((r)=>{console.log("pokemon has been created  :  " )})
          })
        })
}

module.exports = {sequelize , InitDB , PokemonModel}