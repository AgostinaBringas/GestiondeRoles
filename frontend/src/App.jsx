import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Productos from './pages/Productos';
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inicio-sesion" />} />
      <Route path="/inicio-sesion" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/registro" element={<PublicRoute><Registro /></PublicRoute>} />
      <Route path="/productos" element={<PrivateRoute><Productos /></PrivateRoute>} />
      <Route path="/usuarios" element={<PrivateRoute><Usuarios /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
