const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/keranjang')

dotenv.config()

// connect mongo
mongoose.
    connect(process.env.MONGO_URL)
    .then(() => {
        console.log('db connection is Successfully')
    })

const app = express()
app.use(cors())
app.use(express.json())
app.use('/auth',authRoute)
app.use('/product',productRoute)
app.use('/cart',cartRoute)


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend Server is running")
})