const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario'); // tu modelo de usuario

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validación básica
    if (!email || !password) {
      return res.status(400).json({ error: 'Faltan datos' });
    }

    // Verificar si el usuario ya existe
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(409).json({ error: 'El usuario ya existe' });
    }

    // Crear nuevo usuario
    const nuevoUsuario = new Usuario({ email, password }); // idealmente deberías hashear la contraseña
    await nuevoUsuario.save();

    res.status(201).json({ success: true, usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

module.exports = router;
