import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Inicio</Link>
      {!user && <>
        <Link to="/inicio-sesion">Login</Link>
        <Link to="/registro">Registro</Link>
      </>}
      {user && <>
        <Link to="/productos">Productos</Link>
        <Link to="/usuarios">Usuarios</Link>
        <button onClick={logout}>Logout</button>
        {user.rol === 'admin' && <Link to="/admin">Panel Admin</Link>}
      </>}
    </nav>
  );
}

export default Navbar