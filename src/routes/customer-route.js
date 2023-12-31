"use strict";
//Criar rota
const express = require("express");
const router = express.Router();
const controller = require('../controllers/customer-controler');
const authService = require('../services/auth-service');



router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', authService.authorize, controller.refreshToken);

module.exports = router;