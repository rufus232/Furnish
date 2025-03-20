// routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();  // Assure-toi d'utiliser "express.Router()"
const Joi = require('joi');  // Utilisation de Joi pour la validation des données

// Validation des données avec Joi
const productSchema = Joi.object({
    name: Joi.string().min(3).required(),  // Nom du produit : chaîne de caractères, minimum 3 caractères
    price: Joi.number().positive().required(),  // Prix : nombre positif
    description: Joi.string().min(10).required(),  // Description : chaîne de caractères avec au moins 10 caractères
    image: Joi.string().uri().required(),  // URL de l'image : chaîne de caractères au format URI
    category: Joi.string().valid('chairs', 'sofas', 'tables', 'lights').required(),  // Catégorie : doit être une des catégories valides
    rating: Joi.number().min(0).max(5).required(),  // Note : nombre entre 0 et 5
});

// Route POST pour ajouter un produit
router.post('/', async (req, res) => {
    try {
        // Validation des données reçues avec Joi
        const { error } = productSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: 'Données invalides', details: error.details });
        }

        // Destructuration des champs du produit
        const { name, price, description, image, category, rating } = req.body;

        // Vérification que le prix et la note ne sont pas négatifs
        if (price < 0 || rating < 0) {
            return res.status(400).json({ message: 'Le prix et la note doivent être positifs' });
        }

        // Créer un nouveau produit avec les données validées
        const newProduct = new Product({ name, price, description, image, category, rating });

        // Sauvegarde du produit dans la base de données
        await newProduct.save();

        // Réponse de succès
        res.status(201).json({ message: 'Produit ajouté avec succès', product: newProduct });

    } catch (error) {
        // Gestion des erreurs serveur
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
});

// Autres routes pour obtenir, mettre à jour et supprimer les produits
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json({ message: 'Produit supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;  // Assure-toi que tu exportes bien le router
