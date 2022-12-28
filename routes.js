const Pokemon  = require("./Controllers/pokemons_controller")

module.exports =  (app)=>{

        app.get("/", (req,res)=>{ bres.send("Welcome Sir !!!")})
        
        app.get("/api/pokemons", Pokemon.index)
        
        app.get("/api/pokemons/:id",  Pokemon.show)
        
        app.post("/api/pokemons",  Pokemon.create)
        
        app.put("/api/pokemons/:id",  Pokemon.update)
        
        app.delete("/api/pokemons/:id",  Pokemon.destroy)
        
        app.get("*" , (req,res)=> res.send("Routes Error") )
}

