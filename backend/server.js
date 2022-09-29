const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddlewareHandler')
const colors = require('colors')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

connectDB()


const app = express()

//express json and express url encoded added so that we can send the body data and it can be processed by the BE, these two lines belong to the Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

