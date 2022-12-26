const express = require ("express")
const app = express()

const port = 8000
const baseUrl = `http://localhost:${port}`

app.get("/", (req,res)=>{
    res.send("hello the world 8888 !!!")
})
app.listen(port     , ()=>{console.log( `Server started at ${baseUrl}`)})