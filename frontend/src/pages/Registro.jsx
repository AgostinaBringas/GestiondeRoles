import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password) {
      alert('Por favor, completá todos los campos');
      return;
    }

    fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          alert('Error al crear el usuario');
        } else {
          alert('Usuario creado con éxito');
          navigate('/login');
        }
      })
      .catch(err => {
        console.error('Error al registrar:', err);
        alert('Hubo un problema al conectar con el servidor');
      });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>Crear Cuenta</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem', width: '100%', padding: '0.5rem' }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem', width: '100%', padding: '0.5rem' }}
      />
      <button
        onClick={handleRegister}
        disabled={!email || !password}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Registrarse
      </button>
    </div>
  );
}

export default Register;
