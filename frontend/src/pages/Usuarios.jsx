// // src/pages/Usuarios.jsx
// import { useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext';

// function Usuarios() {
//   const { user } = useAuth();
//   const [usuarios, setUsuarios] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/api/usuarios', {
//       headers: { Authorization: `Bearer ${user.token}` }
//     })
//       .then(res => res.json())
//       .then(setUsuarios);
//   }, []);

//   const cambiarRol = (id, nuevoRol) => {
//     fetch(`http://localhost:3001/api/usuarios/${id}/rol`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${user.token}`
//       },
//       body: JSON.stringify({ rol: nuevoRol })
//     })
//       .then(res => {
//         if (res.ok) {
//           alert('Rol actualizado');
//           setUsuarios(prev =>
//             prev.map(u => (u._id === id ? { ...u, rol: nuevoRol } : u))
//           );
//         } else {
//           alert('Error al actualizar rol');
//         }
//       });
//   };

//   return (
//     <div>
//       <h2>Gestión de Usuarios</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Nombre</th>
//             <th>Email</th>
//             <th>Rol</th>
//             {user.rol === 'admin' && <th>Acciones</th>}
//           </tr>
//         </thead>
//         <tbody>
//           {usuarios.map(u => (
//             <tr key={u._id}>
//               <td>{u.nombre}</td>
//               <td>{u.email}</td>
//               <td>{u.rol}</td>
//               {user.rol === 'admin' && (
//                 <td>
//                   <select
//                     value={u.rol}
//                     onChange={e => cambiarRol(u._id, e.target.value)}
//                   >
//                     <option value="cliente">Cliente</option>
//                     <option value="moderador">Moderador</option>
//                     <option value="admin">Admin</option>
//                   </select>
//                 </td>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Usuarios;
import { useEffect, useState } from 'react'

function Usuarios() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/usuarios')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error('Error al obtener usuarios:', err))
  }, [])

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  )
}

export default Usuarios