const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
require('dotenv').config()

const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 5000

let apiKey = process.env.APIKEY

app.get('/', (req, res) => {
    res.render('index', { weather: null, error: null })
})

app.post('/', (req, res) => {
    let city = req.body.city
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(url)
        .then((result) => result.json())
        .then((result) => {
            let weather = result
            let weatherInfo = `It's ${weather.main.temp} degree Celsius and it feels like ${weather.main.feels_like} in degree Celsius in ${weather.name} !`
            console.log(weather.main)
            res.render('index', { weather: weatherInfo, error: null })
        })
        .catch((err) => console.log({ err }))
})

app.listen(port, () => {
    console.log(`Server is running in ${port}`)
})
