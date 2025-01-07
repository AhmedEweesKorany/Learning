const event = require("events")
const express = require("express")



const eventName = "this"
const eventData = {
    name:"ahmed",
    age:19
}
const eventEmiter = new event.EventEmitter()

eventEmiter.on(eventName,(data)=>console.log("data is" , data))


eventEmiter.emit(eventName,eventData)


