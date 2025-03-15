import mongoose from 'mongoose';

// Fonction pour connecter à la base de données
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};

// Fonction pour fermer la connexion à la base de données
export const disconnectDB = async () => {
  await mongoose.disconnect();
};