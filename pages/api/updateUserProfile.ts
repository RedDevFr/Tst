// src/pages/api/updateUserProfile.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../models/User';

export default function handler(req: NextApiRequest, res: NextApiResponse<User>) {
    // Logique pour mettre à jour le profil de l'utilisateur
    const updatedUser: User = req.body; // Exemple
    res.status(200).json(updatedUser);
}
