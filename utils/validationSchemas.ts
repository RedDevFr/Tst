// src/utils/validationSchemas.ts
import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    username: yup.string().required('Le nom d\'utilisateur est requis.'),
    email: yup.string().email('Email invalide.').required('L\'email est requis.'),
    password: yup.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères.').required('Le mot de passe est requis.'),
});
