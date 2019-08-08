const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const { getGamerInfo } = require('./controller/gamerInfo');

dotenv.config({ path: './config.env' });

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.get('/api/v1/profile/:platform/:gamertag', (req, res) => {
  getGamerInfo(req, res, fetch);
});

const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(
    `server running on ${process.env.NODE_ENV} mode on port: ${port} `
  )
);
