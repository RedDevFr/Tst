import crypto from 'crypto';

// Fonction pour chiffrer un message
export const encryptMessage = (message, publicKey) => {
  const buffer = Buffer.from(message, 'utf-8');
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString('base64');
};

// Fonction pour déchiffrer un message
export const decryptMessage = (encryptedMessage, privateKey) => {
  const buffer = Buffer.from(encryptedMessage, 'base64');
  const decrypted = crypto.privateDecrypt(privateKey, buffer);
  return decrypted.toString('utf-8');
};