const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

let apiKey = process.env.API_KEY
let city = 'portland'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

app.listen(PORT, () => {
    console.log(`Server is running in ${PORT}`)
})
