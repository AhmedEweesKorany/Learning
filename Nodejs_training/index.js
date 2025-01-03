const fs = require("fs")
const path = require("path")

const folderPath = "E:\\Programming\\Learning"

fs.readdir(folderPath,(err,files)=>{
  if (err) console.log(err)
  else{

files.forEach(file=>{
  const filePath = "E:\\Programming\\Learning\\Readme.md"
  fs.readFile(filePath,"utf-8",(err,conetent)=>{
    console.log("content",conetent)
  })
})
  }
})