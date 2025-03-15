import multer from 'multer';

// Configuration du stockage pour multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Chemin où les fichiers seront stockés
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nom de fichier unique
  }
});

// Création de l'upload middleware
const upload = multer({ storage });

export const uploadProductImage = upload.single('image'); // Middleware pour l'image d'un produit