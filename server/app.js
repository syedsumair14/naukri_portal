const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4444

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, (err, success) => {
    if (!err) {
        console.log(`Server runnin on ${PORT}`)
    }
})
