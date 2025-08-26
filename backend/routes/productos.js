const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();

router.get('/', verifyToken, (req, res) => res.json({ productos: [] }));
router.post('/', verifyToken, isAdmin, (req, res) => res.json({ message: 'Producto creado' }));
router.put('/:id', verifyToken, isAdmin, (req, res) => res.json({ message: 'Producto editado' }));
router.delete('/:id', verifyToken, isAdmin, (req, res) => res.json({ message: 'Producto eliminado' }));

module.exports = router;