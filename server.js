require('dotenv').config()

const express = require('express')
const app = express();
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const Moralis = require('moralis').default;


// cors
const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
}
app.use(cors(corsOptions))

// logs
app.use(morgan('tiny'))


// assets
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))
app.use(express.json())


// set template
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')


// assets
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


require('./app/routes/router')(app);

// set template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGODB_URL;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const apiKey = process.env.MORALIS_API_KEY;

const server = async () => {
    await Moralis.start({ apiKey }).then(() => {
        console.log('Connected to moralis server');
        mongoose
            .connect(uri, options)
            .then(() => app.listen(PORT, console.log(`Server is running on port ${PORT}`)))
            .catch(error => {
                throw error
            })
    })
};

server();