import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { processPayment } from '../utils/payment'; // Fonction utilitaire pour traiter le paiement

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('crypto'); // Paiement crypto par défaut
  const [amount, setAmount] = useState(100); // Exemple de montant de commande

  const handlePayment = async () => {
    const response = await processPayment(amount, paymentMethod);
    if (response.success) {
      alert('Payment successful!');
    } else {
      alert('Payment failed!');
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <section className="checkout">
          <h1>Checkout</h1>
          <div>
            <label>Select Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="crypto">Crypto</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <div>
            <h2>Total: {amount} USD</h2>
            <button onClick={handlePayment}>Pay Now</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}