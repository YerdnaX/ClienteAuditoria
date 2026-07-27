const express = require('express');
const { obtenerAuditoriasLogin } = require('../controllers/auditorias-login.controller');

const router = express.Router();

router.get('/', obtenerAuditoriasLogin);

module.exports = router;
