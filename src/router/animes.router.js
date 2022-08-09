const router = require('express').Router();
const controllerAnimes = require('../controller/animes.controller');

router.get('/allAnimes', controllerAnimes.findAllAnimesController);

router.get('/animes/:id', controllerAnimes.findByIdAnimesController);

router.delete('/delete/:id', controllerAnimes.deleteAnimesController);

module.exports = router;
