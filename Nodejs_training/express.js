const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const babelFoly = require("babel-polyfill")
// get environment variable (static for now )
const PORT = 4010 
// init app and use middlewares 
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.get("/",(req,res)=>{
    res.send("Hello world ")

})


app.listen(PORT,()=>{
    console.log(`app is running at http://localhost:${PORT}`)
})