// src/components/ProductForm.tsx
import React, { useState } from 'react';
import { createProduct } from '../services/productService';

const ProductForm: React.FC = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createProduct({ name, price, imageUrl });
            alert('Produit créé avec succès!');
            setName('');
            setPrice(0);
            setImageUrl('');
        } catch (error) {
            console.error('Erreur lors de la création du produit:', error);
            alert('Erreur lors de la création du produit.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">Ajouter un produit</h2>
            <div className="mb-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-2">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Prix</label>
                <input type="number" id="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-2">
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">URL de l'image</label>
                <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter</button>
        </form>
    );
};

export default ProductForm;
