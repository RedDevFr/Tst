// src/pages/api/getProduct/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../../models/Product';

export default function handler(req: NextApiRequest, res: NextApiResponse<Product | undefined>) {
    const { id } = req.query;
    // Ici, vous récupérerez le produit par son ID depuis votre base de données
    const products: Product[] = [
        { id: 1, name: 'Product 1', price: 100, imageUrl: '/images/63ef4afd004cc53333f2eeaa_02_rot_2-p-500.webp' },
        { id: 2, name: 'Product 2', price: 200, imageUrl: '/images/63ef4afd5e809937d6583eb5_02_rot_3_Green-p-500.webp' },
        // ... ajoutez d'autres produits
    ];
    const product = products.find(p => p.id === Number(id));
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).end();
    }
}
