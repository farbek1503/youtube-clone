const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();

const apiRouter = require('./routes/apiRouter');

app.use(cors())
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());

app.use(apiRouter)

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
