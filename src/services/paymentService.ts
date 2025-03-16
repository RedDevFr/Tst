// src/services/paymentService.ts
import api from '../utils/api';

export const processPayment = async (paymentDetails: any) => {
  try {
    const response = await api.post('/processPayment', paymentDetails);
    return response.data;
  } catch (error) {
    console.error('Erreur lors du traitement du paiement:', error);
    throw error;
  }
};

export const createEscrowTransaction = async (escrowDetails: any) => {
  try {
    const response = await api.post('/escrowPayment', escrowDetails);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de la transaction escrow:', error);
    throw error;
  }
};
