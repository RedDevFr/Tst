// src/pages/api/createProduct.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../models/Product';

export default function handler(req: NextApiRequest, res: NextApiResponse<Product>) {
    // Ici, vous ajouterez la logique pour créer un produit dans votre base de données
    const newProduct: Product = {
        id: Math.floor(Math.random() * 1000), // Générer un ID aléatoire (à remplacer par votre logique d'ID)
        ...req.body,
    };
    res.status(201).json(newProduct);
}
