const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
require('dotenv').config()

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 5000

let apiKey = process.env.APIKEY

let city = 'hosur'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

app.get('/', (req, res) => {
    console.log('At the root of app')
})

app.post('/api/weather', (req, res) => {
    request(url, function (error, response, body) {
        let weather = body
        if (error && response.statusCode != 200) {
            throw error
        }
        let weatherText = `It's ${weather}!`
        console.log({ weatherText })
    })
})

app.listen(port, () => {
    console.log(`Server is running in ${port}`)
})
