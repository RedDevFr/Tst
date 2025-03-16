// src/models/User.ts
export interface User {
  id: number;
  username: string;
  email: string;
  password?: string; // Mot de passe uniquement pour l'inscription
  profilePicture?: string;
  // Ajoutez d'autres champs de profil
}
