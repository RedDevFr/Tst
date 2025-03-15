// pages/product/[id].js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Importer useRouter pour accéder aux paramètres de la route dynamique
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { fetchProductById } from '../../utils/product'; // Votre fonction utilitaire pour récupérer le produit par ID

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Récupérer l'ID du produit depuis l'URL

  useEffect(() => {
    if (id) {
      // Charger le produit en fonction de l'ID récupéré depuis l'URL
      const getProduct = async () => {
        const productData = await fetchProductById(id);
        setProduct(productData);
      };
      
      getProduct();
    }
  }, [id]); // Relancer l'effet chaque fois que l'ID change

  if (!product) {
    return <div>Loading...</div>; // Afficher un message de chargement tant que le produit n'est pas récupéré
  }

  return (
    <div>
      <Navbar />
      <main>
        <section className="product-details">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price} USD</p>
          <button>Add to Cart</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}