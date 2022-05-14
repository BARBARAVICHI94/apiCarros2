const express  = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get("/", (req,res) => res.send('ok'))

module.express = router 