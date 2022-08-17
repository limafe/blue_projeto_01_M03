const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema({
  name: { type: String, require: true },
  year: { type: Number, required: true },
  autor: { type: String, required: true },
});

const Anime = mongoose.model('animes', AnimeSchema);

module.exports = Anime;
