const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');
const ConnectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

ConnectDB();

const foods = require('./routes/foods');

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/foodspecs', foods);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});

module.exports = app;