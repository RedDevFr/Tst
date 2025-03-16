// src/components/EscrowPaymentChoice.tsx
import React from 'react';

interface EscrowPaymentChoiceProps {
  onPaymentMethodSelect: (method: 'real' | 'escrow') => void;
}

const EscrowPaymentChoice: React.FC<EscrowPaymentChoiceProps> = ({ onPaymentMethodSelect }) => {
  const handlePaymentMethodSelect = (method: 'real' | 'escrow') => {
    onPaymentMethodSelect(method);
  };

  return (
    <div>
      <button onClick={() => handlePaymentMethodSelect('real')}>Paiement direct (Stripe/PayPal)</button>
      <button onClick={() => handlePaymentMethodSelect('escrow')}>Paiement avec Escrow</button>
    </div>
  );
};

export default EscrowPaymentChoice;
