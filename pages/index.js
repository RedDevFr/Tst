import React from 'react';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../utils/api';

export default function HomePage() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchProducts() {
      const productData = await getAllProducts();
      setProducts(productData);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Bienvenue sur le Marketplace</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}