// src/pages/Productos.jsx
import { useAuth } from '../context/AuthContext';

function Productos() {
  const { user } = useAuth();

  const esAdmin = user?.rol === 'admin';

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        <li>Producto 1</li>
        <li>Producto 2</li>
      </ul>

      {esAdmin && (
        <div>
          <button>Crear Producto</button>
          <button>Editar Producto</button>
          <button
            onClick={() => {
              if (window.confirm('¿Seguro que querés eliminar?')) {
                alert('Producto eliminado');
              }
            }}
          >
            Eliminar Producto
          </button>
        </div>
      )}
    </div>
  );
}

export default Productos;
