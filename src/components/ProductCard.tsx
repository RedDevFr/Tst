// src/components/ProductCard.tsx
import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    isBoosted?: boolean;
    boostExpiration?: Date;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            {product.isBoosted && <p className="text-green-600">Boosté ! Expire le : {product.boostExpiration?.toLocaleDateString()}</p>}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Voir le produit</button>
        </div>
    );
};

export default ProductCard;
