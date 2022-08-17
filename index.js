const express = require('express');
const cors = require('cors');
const router = require('./src/router/animes.router');
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use('/animes', router);
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
