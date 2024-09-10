import React, { useState } from 'react';
import { loginService } from '../../services/auth/auth.service';
import { useNavigate } from 'react-router-dom';
import { homeBarStyles } from './home.bar.styles';
import Cookies from 'js-cookie';

const HomeBar: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await loginService({ email, password });
      if (result.success) {
        Cookies.set('token', result.data.accessToken);
        navigator('/student/schedule');
      } else {
        console.error('Error en el login:', result.error);
      }
    } catch (error) {
      console.error('Error en handleSubmit:', error);
    }
  };

  return (
    <nav style={homeBarStyles.homebar as React.CSSProperties}>
      <div style={homeBarStyles.logo as React.CSSProperties}>
        <h1 style={{marginBottom: '5rem'}}>Educa Nexo 2.0</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} style={homeBarStyles.loginForm as React.CSSProperties}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={homeBarStyles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={homeBarStyles.input}
          />
          <button type="submit" style={homeBarStyles.button}>Login</button>
        </form>
      </div>
    </nav>
  );
};

export default HomeBar;