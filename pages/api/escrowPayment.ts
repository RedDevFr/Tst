// src/pages/api/escrowPayment.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // Logique pour créer une transaction escrow
  res.status(201).json({ message: 'Transaction escrow créée!' });
}
