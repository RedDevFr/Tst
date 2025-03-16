// src/components/LoginForm.tsx
import React, { useState } from 'react';
import { loginUser } from '../services/userService';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser({ username, password });
      alert('Connexion réussie!');
      // Rediriger vers le profil ou la page d'accueil
    } catch (error) {
      console.error('Erreur de connexion:', error);
      alert('Erreur de connexion.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-md">
      {/* ... champs username et password ... */}
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;

// src/components/RegisterForm.tsx
import React, { useState } from 'react';
import { registerUser } from '../services/userService';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser({ username, email, password });
      alert('Inscription réussie!');
      // Rediriger vers la connexion ou la page d'accueil
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
      alert('Erreur d\'inscription.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-md">
      {/* ... champs username, email et password ... */}
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default RegisterForm;
