const animesService = require('../service/animes.service');
const mongoose = require('mongoose');

const findAllAnimesController = async (req, res) => {
  const animes = await animesService.findAllAnimesService();
  if (animes.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nem um anime cadastrado' });
  }
  res.send(animes);
};

const findByIdAnimesController = async (req, res) => {
  const paramsId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(paramsId)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  const selectAnime = await animesService.findByIdAnimesService(paramsId);
  if (!selectAnime) {
    return res.status(404).send({ message: 'Anime não encontrado!' });
  }

  res.send(selectAnime);
};

const deleteAnimeController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  await animesService.deleteAnimesService(idParam);

  res.send({ message: 'Anime deletado!.' });
};

const createAnimeController = async (req, res) => {
  const anime = req.body;

  if (!anime || !anime.name || !anime.year || !anime.autor) {
    return res.status(400).send({ message: 'Envie todos os campos do anime!' });
  }
  const newAnime = await animesService.createAnimesService(anime);
  res.status(201).send(newAnime);
};

const editAnimeController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const animeEdit = req.body;

  if (!animeEdit || !animeEdit.name || !animeEdit.year || !animeEdit.autor) {
    return res.status(400).send({ message: 'Envie todos os campos do anime!' });
  }
  const editedAnime = await animesService.editAnimesService(idParam, animeEdit);
  res.send(editedAnime);
};

module.exports = {
  findAllAnimesController,
  findByIdAnimesController,
  deleteAnimeController,
  createAnimeController,
  editAnimeController,
};
