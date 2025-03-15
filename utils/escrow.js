// Fonction pour créer une nouvelle transaction d'escrow
export const createEscrowTransaction = async (buyer, seller, productId, amount) => {
  const response = await axios.post('/api/escrow/create', {
    buyer,
    seller,
    productId,
    amount,
  });

  return response.data;
};

// Fonction pour libérer le paiement de l'escrow après validation
export const releaseEscrowPayment = async (transactionId) => {
  const response = await axios.post('/api/escrow/release', { transactionId });

  return response.data;
};

// Fonction pour annuler un paiement d'escrow
export const cancelEscrowTransaction = async (transactionId) => {
  const response = await axios.post('/api/escrow/cancel', { transactionId });

  return response.data;
};