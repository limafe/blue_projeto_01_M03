const animesService = require('../service/animes.service');

const findAllAnimesController = (req, res) => {
  const animes = animesService.findAllAnimesService();
  res.send(animes);
};

const findByIdAnimesController = (req, res) => {
  const parametroId = Number(req.params.id);
  const selectAnime = animesService.findByIdAnimesService(parametroId);
  res.send(selectAnime);
};

const createAnimesController = (req, res) => {
  const anime = req.body;
  const newAnime = animesService.createAnimesService(anime);
  res.send(newAnime);
};

const deleteAnimesController = (req, res) => {
  const idParam = req.params.id;
  animesService.deleteAnimesService(idParam);
  res.send({ message: 'Anime successfully deleted' });
};

module.exports = {
  findAllAnimesController,
  findByIdAnimesController,
  createAnimesController,
  deleteAnimesController,
};
