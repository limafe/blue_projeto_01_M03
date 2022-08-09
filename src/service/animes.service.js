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
  newAnime.id = newId();
  animes.push(newAnime);
  return newAnime;
};

const updateAnimesService = (newAnime, id) => {
  const animeIndex = animes.findIndex((anime) => anime.id == id);

  let animeToSplice = animes[animeIndex];
  animeToSplice.name =
    newAnime.name === undefined ? animes[animeIndex].name : newAnime.name;
  animeToSplice.year =
    newAnime.year === undefined ? animes[animeIndex].year : newAnime.year;
  animeToSplice.autor =
    newAnime.autor === undefined ? animes[animeIndex].autor : newAnime.autor;

  animes.splice(animeIndex, 1, animeToSplice);
  return animeToSplice;
};

const deleteAnimesService = (id) => {
  const animeIndex = animes.findIndex((anime) => anime.id == id);
  return animes.splice(animeIndex, 1);
};

function newId() {
  let x = 1;
  loop: while (true) {
    for (let obj of animes) {
      if (obj.id == x) {
        x++;
        continue loop;
      }
    }
    return x;
  }
}

module.exports = {
  updateAnimesService,
  findAllAnimesService,
  findByIdAnimesService,
  createAnimesService,
  deleteAnimesService,
};
