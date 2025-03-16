// src/pages/api/getProducts.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../models/Product';

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
    // Ici, vous récupérerez les produits de votre base de données
    const products: Product[] = [
        { id: 1, name: 'Product 1', price: 100, imageUrl: '/images/63ef4afd004cc53333f2eeaa_02_rot_2-p-500.webp' },
        { id: 2, name: 'Product 2', price: 200, imageUrl: '/images/63ef4afd5e809937d6583eb5_02_rot_3_Green-p-500.webp' },
        // ... ajoutez d'autres produits
    ];
    res.status(200).json(products);
}
