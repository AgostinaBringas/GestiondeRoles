const express = require('express');
const { listarUsuarios, cambiarRolUsuario } = require('../controllers/usuariosController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();

router.get('/', verifyToken, isAdmin, listarUsuarios);
router.put('/:id/rol', verifyToken, isAdmin, cambiarRolUsuario);

module.exports = router;