// controllers/usuariosController.js

const registrarUsuario = (req, res) => {
  res.json({ mensaje: 'Usuario registrado correctamente' });
};

const listarUsuarios = (req, res) => {
  res.json({ usuarios: [] });
};

const cambiarRolUsuario = (req, res) => {
  res.json({ mensaje: 'Rol cambiado correctamente' });
};

module.exports = {
  registrarUsuario,
  listarUsuarios,
  cambiarRolUsuario
};
