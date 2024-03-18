const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const helmet = require('helmet')

const app = express()
const {
    globals,
    viewIndex,
    connectDatabase
} = require('../middleware')

app.use(globals)
app.use(connectDatabase)

const corsOptions = {
    origini: "http://localhost:3010",
    method:["POST","GET"],
    credential: true
}
app.use(cors(corsOptions))
app.use(express.json({ limit: '1GB' }))
app.use(express.urlencoded({ extended: true }))
app.use(helmet())


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

//VIEWS
app.set('view engine', 'ejs')
app.get('/', viewIndex)
app.use('/', routes)

module.exports = app