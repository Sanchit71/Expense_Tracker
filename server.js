const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');

dotenv.config({path: './config/config.env'});

const transactions = require('./routes/transaction')

const app = express();

app.use('/api/v1/transactions',transactions);

const PORT = process.env.PORT||5000;

app.listen(PORT,console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`));