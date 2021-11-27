const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express();

const mongoose = require('./database')

app.set('port', 4000)

app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin:'http://localhost:4200'}))

app.use('/api/educapp', require('./routes/web.routes'))

app.listen(app.get('port'), () => {
    console.log('Listening on port ' + app.get('port'))
})