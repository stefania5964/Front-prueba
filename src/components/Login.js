import React, { useState } from 'react';
import '../estilos/Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      email: email,
      password: password
    });

    try {
      
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body
      });

      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); 
        console.log('Login successful!');
        
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed'); 
      }
    } catch (error) {
      setError('An error occurred: ' + error.message); 
    }
  };

  return (
    <div className="Login">
      <div className="stars"></div>
      <header className="Login-header">
        <h1>Lite Thinking</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>} {/* Mostrar errores */}
        </form>
      </header>
    </div>
  );
}

export default Login;