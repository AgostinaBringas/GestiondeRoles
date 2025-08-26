const Usuario = require('../models/Usuario');

exports.listarUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

exports.cambiarRolUsuario = async (req, res) => {
  const { id } = req.params;
  const { rol } = req.body;
  await Usuario.findByIdAndUpdate(id, { rol });
  res.json({ message: 'Rol actualizado' });
};