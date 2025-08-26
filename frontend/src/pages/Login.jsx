import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert('Por favor, completá todos los campos');
      return;
    }

    setLoading(true);

    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        if (data.error) {
          alert('Credenciales inválidas');
        } else {
          login(data);
          navigate('/');
        }
      })
      .catch(err => {
        setLoading(false);
        console.error('Error al iniciar sesión:', err);
        alert('Hubo un problema al conectar con el servidor');
      });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>Iniciar Sesión</h2>
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
        onClick={handleLogin}
        disabled={loading || !email || !password}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Ingresando...' : 'Ingresar'}
      </button>

      <p style={{ marginTop: '1rem' }}>
        ¿No tenés cuenta?{' '}
        <span
          onClick={() => navigate('/registro')}
          style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Registrate acá
        </span>
      </p>
    </div>
  );
}

export default Login;
