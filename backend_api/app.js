const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); //Postgres
require('dotenv').config();
const bodyParser = require('body-parser');

const dogRoutes = require('./routes/dogs');
const userRoutes = require('./routes/users');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// Middleware to attach the database pool to the request object
app.use((req, res, next) => {
  req.pool = pool;
  next();
});


app.get('/', (req, res) => {
  res.send('Witamy w API Schroniska dla Psów!');
});

app.use('/api/dogs', dogRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log();
});
