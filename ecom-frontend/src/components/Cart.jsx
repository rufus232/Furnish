import React from "react";
import { useCart } from "../context/CartContext.jsx"; // Importation correcte du hook useCart
import "./Cart.css"; // Si vous avez un fichier de styles dédié à votre panier

const Cart = () => {
  const { cartItems, addToCart } = useCart();

  // Fonction pour augmenter la quantité d'un article
  const increaseQuantity = (product) => {
    addToCart({ ...product, quantity: product.quantity + 1 });
  };

  // Fonction pour diminuer la quantité d'un article
  const decreaseQuantity = (product) => {
    if (product.quantity > 1) {
      addToCart({ ...product, quantity: product.quantity - 1 });
    }
  };

  return (
    <div className="cart-container">
      <h2>Votre Panier</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Votre panier est vide.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <div className="quantity-control">
                  <button
                    className="quantity-btn"
                    onClick={() => decreaseQuantity(item)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </button>
                </div>
                <p className="item-price">{item.price}€</p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total : {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}€</h3>
            <button className="checkout-btn">Passer à la caisse</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
