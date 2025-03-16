// src/pages/product/[id].tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getProductById } from '../../services/productService';
import { Product } from '../../models/Product';

const ProductDetails: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const data = await getProductById(Number(id));
                    setProduct(data);
                    setLoading(false);
                } catch (err) {
                    setError(err);
                    setLoading(false);
                }
            };
            fetchProduct();
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!product) return <p>Produit non trouvé.</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} />
            <p>Prix: ${product.price}</p>
            {/* Ajoutez d'autres détails du produit */}
        </div>
    );
};

export default ProductDetails;
