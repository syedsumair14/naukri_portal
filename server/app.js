const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4444


const adminRoleRoutes = require('./routes/admin/roles/roles')
const userRoutes = require('./routes/portal/user/user')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => { console.log(req.method, req.path); next() })

app.use('/admin', adminRoleRoutes)
app.use('/user', userRoutes)


app.get('/', (req, res) => {
    res.send('<h5>Naukri backend</h5>')
})
app.use((err, req, res, next) => {
    err.status = err.status || 500
    err.message = err.message || 'something went wrong'
    res.json(err)
})

app.listen(PORT, (err, success) => {
    if (!err) {
        console.log(`Server runnin on ${PORT}`)
    }
})
