import React from 'react';
import './ProductModal.css';

function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="product-modal">
        <div className="modal-content">
          <div className="modal-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="modal-details">
            <h2>{product.title}</h2>
            <div className="product-info-row">
              <span className="product-category">{product.category}</span>
              <span className="product-price">{product.price}</span>
            </div>
            <div className="product-description">
              <p>{product.description || "Experience the latest technology with our premium product designed for optimal performance and reliability."}</p>
            </div>
            <div className="product-rating">
              <div className="stars">
                ★★★★★
                <span className="rating-count">(125 reviews)</span>
              </div>
            </div>
            <div className="availability">
              <span className="in-stock">In Stock</span> - Get it by {getDeliveryDate()}
            </div>
            <div className="modal-actions">
              <button className="buy-btn">Buy</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
      </div>
    </div>
  );
}

// Helper function to calculate delivery date (3 days from now)
function getDeliveryDate() {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default ProductModal;