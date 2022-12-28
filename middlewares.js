const favicon = require ("serve-favicon")
const morgan = require ("morgan")
const bodyParser = require("body-parser")


const faviconPath = __dirname + "/favicon.ico"

module.exports = (app)=>{
    app
        .use(favicon(faviconPath ))
        .use(morgan('dev'))
        .use(bodyParser.json())
}