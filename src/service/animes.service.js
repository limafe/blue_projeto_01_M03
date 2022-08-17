const Animes = require('../models/Animes');

const findAllAnimesService = async () => {
  const animes = await Animes.find();
  return animes;
};

const findByIdAnimesService = async (paramsId) => {
  const anime = await Animes.findById(paramsId);
  return anime;
};

const deleteAnimesService = async (id) => {
  return await Animes.findByIdAndDelete(id);
};

const createAnimesService = async (newAnime) => {
  const animeCreated = await Animes.create(newAnime);
  return animeCreated;
};

const editAnimesService = async (id, animeEdit) => {
  const animeUpdate = await Animes.findByIdAndUpdate(id, animeEdit);
  return animeUpdate;
};

module.exports = {
  findAllAnimesService,
  findByIdAnimesService,
  deleteAnimesService,
  createAnimesService,
  editAnimesService,
};
