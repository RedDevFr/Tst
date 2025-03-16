// src/components/FilterSidebar.tsx
import React, { useState } from 'react';

interface FilterSidebarProps {
    onFilter: (category: string | null, priceRange: number[] | null) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilter }) => {
    const [category, setCategory] = useState<string | null>(null);
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value === 'all' ? null : e.target.value;
        setCategory(value);
        onFilter(value, [minPrice || 0, maxPrice || Infinity]);
    };

    const handlePriceChange = () => {
        onFilter(category, [minPrice || 0, maxPrice || Infinity]);
    };

    return (
        <div className="border p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">Filtres</h2>
            <div className="mb-2">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Catégorie</label>
                <select id="category" onChange={handleCategoryChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="all">Toutes</option>
                    <option value="electronics">Électronique</option>
                    <option value="clothing">Vêtements</option>
                    {/* Ajoutez d'autres catégories */}
                </select>
            </div>
            <div className="mb-2">
                <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">Prix min</label>
                <input type="number" id="minPrice" onChange={(e) => setMinPrice(Number(e.target.value))} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-2">
                <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">Prix max</label>
                <input type="number" id="maxPrice" onChange={(e) => setMaxPrice(Number(e.target.value))} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <button onClick={handlePriceChange} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Filtrer</button>
        </div>
    );
};

export default FilterSidebar;
