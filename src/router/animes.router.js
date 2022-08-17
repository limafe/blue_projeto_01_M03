const router = require('express').Router();
const controllerAnimes = require('../controller/animes.controller');

router.get('/allAnimes', controllerAnimes.findAllAnimesController);
router.get('/selectionAnime/:id', controllerAnimes.findByIdAnimesController);
router.delete('/delete/:id', controllerAnimes.deleteAnimeController);
router.post('/create', controllerAnimes.createAnimeController);
router.put('/update/:id', controllerAnimes.editAnimeController);

module.exports = router;
