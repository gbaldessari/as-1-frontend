import React, { useState } from 'react';
import { loginService } from '../../../services/auth/auth.service';

const HomeBar: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await loginService({ email, password });
      if (result.success) {
        console.log('Login exitoso');
      } else {
        console.error('Error en el login:', result.error);
      }
    } catch (error) {
      console.error('Error en handleSubmit:', error);
    }
  };

  return (
    <nav>
      <div>
        <h1>Educa Nexo 2.0</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </nav>
  );
};

export default HomeBar;
