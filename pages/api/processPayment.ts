// src/pages/api/processPayment.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // Logique pour traiter le paiement (Stripe/PayPal)
  res.status(200).json({ message: 'Paiement traité avec succès!' });
}
