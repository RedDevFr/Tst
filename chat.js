// utils/chatUtils.js

// Exemple de fonction pour récupérer les messages
export const getMessages = async () => {
  // Exemple d'appel à une API ou à une base de données
  try {
    const response = await fetch('/api/messages');
    if (!response.ok) throw new Error('Erreur lors de la récupération des messages');
    const data = await response.json();
    return data.messages; // Vous renvoyez les messages récupérés
  } catch (error) {
    console.error('Erreur:', error);
    return [];
  }
};

// Exemple de fonction pour envoyer un message
export const sendMessage = async (message) => {
  // Envoie d'un message à une API ou serveur
  try {
    const response = await fetch('/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    if (!response.ok) throw new Error('Erreur lors de l\'envoi du message');
    const data = await response.json();
    return data; // Renvoie la réponse du serveur (par exemple, le message envoyé)
  } catch (error) {
    console.error('Erreur:', error);
    return null;
  }
};

// Exemple de fonction pour rejoindre un chat (enregistrement de l'utilisateur)
export const joinChat = async (username) => {
  // Envoie d'une requête pour enregistrer l'utilisateur dans la session de chat
  try {
    const response = await fetch('/api/join-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    if (!response.ok) throw new Error('Erreur lors de l\'inscription dans le chat');
    const data = await response.json();
    return data; // Renvoie la confirmation ou les informations sur l'utilisateur
  } catch (error) {
    console.error('Erreur:', error);
    return null;
  }
};

// Exemple de fonction pour quitter le chat
export const leaveChat = async (username) => {
  // Envoi d'une requête pour désinscrire l'utilisateur du chat
  try {
    const response = await fetch('/api/leave-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    if (!response.ok) throw new Error('Erreur lors de la sortie du chat');
    const data = await response.json();
    return data; // Renvoie la confirmation de la sortie
  } catch (error) {
    console.error('Erreur:', error);
    return null;
  }
};
