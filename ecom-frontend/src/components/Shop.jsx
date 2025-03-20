import React, { useState, useEffect } from 'react';
import './Shop.css';
import { Heart,ShoppingCart, Star, X, Pencil, AlertTriangle } from 'lucide-react';
import { useCart } from "../context/CartContext.jsx";
const Shop = () => {
    const { addToCart } = useCart();
    const [activeCategory, setActiveCategory] = useState('all');
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', image: '', category: '', rating: 0 });
    const [editProduct, setEditProduct] = useState(null); // Stocke le produit à modifier
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Erreur lors du chargement des produits :", error);
        }
    };
    const [cartItems, setCartItems] = useState([]);

const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
        const existingItem = prevCart.find((item) => item._id === product._id);
        if (existingItem) {
            return prevCart.map((item) =>
                item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
            );
        }
        return [...prevCart, { ...product, quantity: 1 }];
    });
};


    const handleChange = (e) => {
        if (editProduct) {
            setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
        } else {
            setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!newProduct.category) {
                alert("Veuillez sélectionner une catégorie pour le produit");
                return;
            }

            const productToSend = {
                ...newProduct,
                price: parseFloat(newProduct.price) 
            };

            const response = await fetch('http://localhost:3001/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productToSend)
            });

            if (response.ok) {
                const addedProduct = await response.json();
                const productToAdd = addedProduct.product || addedProduct;
                setProducts([...products, productToAdd]);
                setShowForm(false);
                setNewProduct({ name: '', price: '', description: '', image: '', category: '', rating: 0 });
            } else {
                const errorData = await response.json();
                alert(`Erreur lors de l'ajout : ${errorData.message || 'Erreur inconnue'}`);
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout du produit :", error);
            alert(`Erreur lors de l'ajout du produit : ${error.message}`);
        }
    };

    const handleEditClick = (product) => {
        setEditProduct(product);
        setShowForm(true);
    };

    const handleDeleteClick = (product) => {
        setProductToDelete(product);
        setShowDeleteModal(true);
    };
    
    const handleDelete = async () => {
        if (!productToDelete) return;
        
        try {
            const response = await fetch(`http://localhost:3001/api/products/${productToDelete._id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setProducts(products.filter(product => product._id !== productToDelete._id));
                setShowDeleteModal(false);
                setProductToDelete(null);
            }
        } catch (error) {
            console.error("Erreur lors de la suppression du produit :", error);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            if (!editProduct.category) {
                alert("Veuillez sélectionner une catégorie pour le produit");
                return;
            }

            const productToSend = {
                ...editProduct,
                price: parseFloat(editProduct.price)
            };

            const response = await fetch(`http://localhost:3001/api/products/${editProduct._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productToSend)
            });

            if (response.ok) {
                const updatedProduct = await response.json();
                setProducts(products.map(p => (p._id === updatedProduct._id ? updatedProduct : p)));
                setShowForm(false);
                setEditProduct(null);
            } else {
                const errorData = await response.json();
                alert(`Erreur lors de la mise à jour : ${errorData.message || 'Erreur inconnue'}`);
            }
        } catch (error) {
            console.error("Erreur lors de la mise à jour du produit :", error);
            alert(`Erreur lors de la mise à jour du produit : ${error.message}`);
        }
    };

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'chairs', name: 'Chairs' },
        { id: 'sofas', name: 'Sofas' },
        { id: 'tables', name: 'Tables' },
        { id: 'lights', name: 'Lights' }
    ];

    const filteredProducts = activeCategory === 'all' ? products : products.filter(product => product.category === activeCategory);

    return (
        <section className="shop-selling-section">
            <h2 className="section-title">Our Best Selling Products</h2>

            <div className="product-categories">
                {categories.map(category => (
                    <button 
                        key={category.id}
                        className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <button className="add-product-button" onClick={() => { setShowForm(true); setEditProduct(null); }}>
                {showForm ? "Fermer le formulaire" : "Ajouter un produit"}
            </button>

            {showForm && (
                <div className="form-popup-overlay">
                    <div className="form-popup-card">
                        <div className="form-header">
                            <h3>{editProduct ? "Modifier le produit" : "Ajouter un produit"}</h3>
                            <button className="close-form-button" onClick={() => setShowForm(false)}>
                                <X size={24} />
                            </button>
                        </div>
                        
                        <form className="add-product-form" onSubmit={editProduct ? handleUpdate : handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nom du produit</label>
                                <input 
                                    id="name" 
                                    type="text" 
                                    name="name" 
                                    value={editProduct ? editProduct.name : newProduct.name} 
                                    onChange={handleChange} 
                                    placeholder="Ex: Chaise design ergonomique" 
                                    required 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="price">Prix (€)</label>
                                <input 
                                    id="price" 
                                    type="number" 
                                    name="price" 
                                    value={editProduct ? editProduct.price : newProduct.price} 
                                    onChange={handleChange} 
                                    placeholder="Ex: 299.99" 
                                    step="0.01"
                                    min="0"
                                    required 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="category">Catégorie</label>
                                <select 
                                    id="category" 
                                    name="category" 
                                    value={editProduct ? editProduct.category : newProduct.category} 
                                    onChange={handleChange} 
                                    required
                                >
                                    <option value="">Sélectionner une catégorie</option>
                                    {categories.filter(c => c.id !== 'all').map(category => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="image">URL de l'image</label>
                                <input 
                                    id="image" 
                                    type="text" 
                                    name="image" 
                                    value={editProduct ? editProduct.image : newProduct.image} 
                                    onChange={handleChange} 
                                    placeholder="https://example.com/image.jpg" 
                                    required 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea 
                                    id="description" 
                                    name="description" 
                                    value={editProduct ? editProduct.description : newProduct.description} 
                                    onChange={handleChange} 
                                    placeholder="Description détaillée du produit..." 
                                    rows="4" 
                                    required 
                                />
                            </div>

                            {/* Formulaire de notation */}
                            <div className="form-group">
                                <label htmlFor="rating">Note</label>
                                <input 
                                    id="rating" 
                                    type="number" 
                                    name="rating" 
                                    value={editProduct ? editProduct.rating : newProduct.rating} 
                                    onChange={handleChange} 
                                    step="0.1"
                                    min="0"
                                    max="5"
                                    required 
                                />
                            </div>
                            
                            <div className="form-actions">
                                <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>Annuler</button>
                                <button type="submit" className="submit-button">{editProduct ? "Modifier" : "Ajouter"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="form-popup-overlay">
                    <div className="delete-modal">
                        <div className="delete-modal-header">
                            <AlertTriangle size={24} color="#ff4d4f" />
                            <h3>Confirmer la suppression</h3>
                        </div>
                        
                        <div className="delete-modal-content">
                            <p>Êtes-vous sûr de vouloir supprimer le produit <strong>{productToDelete?.name}</strong> ?</p>
                            <p className="delete-warning">Cette action est irréversible.</p>
                        </div>
                        
                        <div className="delete-modal-actions">
                            <button className="cancel-button" onClick={() => setShowDeleteModal(false)}>Annuler</button>
                            <button className="delete-button" onClick={handleDelete}>Supprimer</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="products-grid">
                {filteredProducts.map(product => (
                    <div className="product-card" key={product._id}>
                        <div className="product-image-container">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-actions">
                                <button className="product-action-button">
                                    <Heart size={18} />
                                </button>
                                <button className="product-action-button" onClick={() => handleEditClick(product)}>
                                    <Pencil size={18} />
                                </button>
                                <button className="product-action-button" onClick={() => handleDeleteClick(product)}>
                                    <X size={18} />
                                </button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <div className="product-price">
                                <span className="current-price">${product.price.toFixed(2)}</span>
                                
                                {/* Ajout des étoiles de notation */}
                                <div className="product-rating">
                                    {[...Array(5)].map((_, i) => {
                                        const fullStar = i < Math.floor(product.rating); // Etoile pleine
                                        const halfStar = i === Math.floor(product.rating) && product.rating % 1 >= 0.5; // Etoile à moitié remplie
                                        const emptyStar = !fullStar && !halfStar; // Etoile vide
                                        return (
                                            <Star 
                                                key={i} 
                                                size={16} 
                                                fill={fullStar ? "#FFD700" : halfStar ? "#FFD700" : "#fff"} 
                                                color={emptyStar ? "#D1D5DB" : "#FFD700"} 
                                                style={{
                                                    opacity: halfStar ? 0.5 : 1,
                                                }}
                                            />
                                        );
                                    })}
                                    {/* Vérifie que la note est définie, sinon elle est définie à 0 */}
                                    <span className="rating-number">({(product.rating || 0).toFixed(1)})</span>
                                </div>
                            </div>
                            <button className="add-to-cart-button bb" onClick={() => addToCart(product)}>
                                Add to Cart <ShoppingCart size={20} />
                            </button>


                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Shop;
