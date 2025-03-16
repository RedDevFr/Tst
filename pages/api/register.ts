// src/pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../models/User';

export default function handler(req: NextApiRequest, res: NextApiResponse<User>) {
  // Logique d'inscription (créer un utilisateur, hacher le mot de passe, etc.)
  const newUser: User = { id: 2, ...req.body }; // Exemple
  res.status(201).json(newUser);
}
