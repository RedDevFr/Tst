// src/components/PaymentForm.tsx
import React from 'react';

interface PaymentFormProps {
  paymentMethod: 'real' | 'escrow';
  onPaymentSuccess: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ paymentMethod, onPaymentSuccess }) => {
  const handlePayment = async () => {
    try {
      if (paymentMethod === 'real') {
        // Logique pour le paiement direct (Stripe/PayPal)
        alert('Paiement direct effectué!');
      } else {
        // Logique pour le paiement avec escrow
        alert('Paiement avec escrow effectué!');
      }
      onPaymentSuccess();
    } catch (error) {
      console.error('Erreur lors du paiement:', error);
      alert('Erreur lors du paiement.');
    }
  };

  return (
    <div>
      <h2>{paymentMethod === 'real' ? 'Paiement direct' : 'Paiement avec Escrow'}</h2>
      {/* Intégration des formulaires de paiement Stripe/PayPal ou des détails de l'escrow */}
      <button onClick={handlePayment}>Confirmer le paiement</button>
    </div>
  );
};

export default PaymentForm;
