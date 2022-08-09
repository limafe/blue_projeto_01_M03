const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const router = require('./src/router/animes.router');
const animes = require('./src/service/animes.service');

app.use('/animes', router);
app.use(express.json());
app.use(cors());

app.post('/create', (req, res) => {
  res.send(animes.createAnimesService(req.body));
});

app.put('/update/:id', (req, res) => {
  res.send(animes.updateAnimesService(req.body, req.params.id));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
