// src/pages/api/getUserProfile.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../models/User';

export default function handler(req: NextApiRequest, res: NextApiResponse<User>) {
    // Logique pour récupérer le profil de l'utilisateur connecté
    const user: User = { id: 1, username: 'testuser', email: 'test@example.com' }; // Exemple
    res.status(200).json(user);
}
