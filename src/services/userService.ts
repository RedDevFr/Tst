// src/services/userService.ts
import api from '../utils/api';
import { User } from '../models/User';

export const loginUser = async (credentials: Pick<User, 'username' | 'password'>) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Erreur de connexion:', error);
    throw error;
  }
};

export const registerUser = async (user: Omit<User, 'id'>) => {
  try {
    const response = await api.post('/register', user);
    return response.data;
  } catch (error) {
    console.error('Erreur d\'inscription:', error);
    throw error;
  }
};
