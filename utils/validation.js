// Fonction pour valider un email
export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
};

// Fonction pour valider un numéro de téléphone
export const validatePhoneNumber = (phoneNumber) => {
  const re = /^[0-9]{10}$/;
  return re.test(phoneNumber);
};

// Fonction pour valider une adresse Ethereum (Ethereum address)
export const validateEthereumAddress = (address) => {
  const re = /^0x[a-fA-F0-9]{40}$/;
  return re.test(address);
};