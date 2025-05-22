const express = require("express")
require("dotenv").config();

const port = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send("Hi from server")
})

app.listen(port, (err) => {
    if (err) console.log(err)
    console.log("Serve Listening on Port:", port)
})