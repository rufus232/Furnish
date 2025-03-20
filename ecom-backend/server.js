const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Charger les variables d'environnement
dotenv.config();

// ✅ Initialisation de l'application Express
const app = express();

// ✅ Active CORS (🔥 avec options pour plus de contrôle si besoin)
app.use(cors({ origin: 'http://localhost:5173' })); // 🔥 Autorise le frontend React
app.use(express.json());
app.use(bodyParser.json());

// ✅ Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté avec succès'))
  .catch((err) => console.log('Erreur de connexion MongoDB :', err));

// ✅ Importation des routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// ✅ Lancer le serveur sur **port 3001**
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Serveur en marche sur le port ${PORT}`));
