const animes = [
  {
    id: 1,
    name: 'Naruto',
    year: 2002,
    autor: 'Masashi Kishimoto',
  },
  {
    id: 2,
    name: 'One Piece',
    year: 1998,
    autor: 'Eiichiro Oda',
  },
  {
    id: 3,
    name: 'Kimetsu no Yaiba',
    year: 2019,
    autor: 'Koyoharu Gotōge',
  },
];

const findAllAnimesService = () => {
  return animes;
};

const findByIdAnimesService = (parametroId) => {
  return animes.find((termo) => termo.id === parametroId);
};

const createAnimesService = (newAnime) => {
  const newId = animes.length + 1;
  newAnime.id = newId;
  animes.push(newAnime);
  return newAnime;
};

const deleteAnimesService = (id) => {
  const animeIndex = animes.findIndex((anime) => anime.id == id);
  return animes.splice(animeIndex, 1);
};

module.exports = {
  findAllAnimesService,
  findByIdAnimesService,
  createAnimesService,
  deleteAnimesService,
};

