// src/pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../models/User';

export default function handler(req: NextApiRequest, res: NextApiResponse<User>) {
  // Logique de connexion (vérifier les identifiants, générer un JWT, etc.)
  const user: User = { id: 1, username: req.body.username, email: 'test@example.com' }; // Exemple
  res.status(200).json(user);
}
