import axios from 'axios';

// Fonction pour initier un paiement via PayPal
export const createPayPalPayment = async (amount, currency) => {
  const response = await axios.post('/api/paypal/create-payment', {
    amount,
    currency,
  });

  return response.data;
};

// Fonction pour vérifier l'état d'un paiement PayPal
export const verifyPayPalPayment = async (paymentId, payerId) => {
  const response = await axios.post('/api/paypal/verify-payment', {
    paymentId,
    payerId,
  });

  return response.data;
};

// Fonction pour initier un paiement en crypto (ETH)
export const createCryptoPayment = async (amount, toAddress) => {
  const response = await axios.post('/api/crypto/create-payment', {
    amount,
    toAddress,
  });

  return response.data;
};

// Fonction pour vérifier l'état d'un paiement en crypto
export const verifyCryptoPayment = async (transactionHash) => {
  const response = await axios.get(`/api/crypto/verify-payment/${transactionHash}`);

  return response.data;
};