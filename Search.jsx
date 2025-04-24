import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './Search.css';
import ProductModal from './ProductModal';

// Sample product data for quick search results
const quickSearchProducts = [
  { 
    id: 3, 
    title: "Ultra slim 4K Smart TV", 
    category: "Electronics", 
    image: "/api/placeholder/200/150", 
    price: "$449.99",
    description: "Experience stunning 4K resolution on this ultra-slim smart TV with integrated streaming services."
  },
  { 
    id: 5, 
    title: "Watch BLAZE smartwatch", 
    category: "Gadgets", 
    image: "/api/placeholder/200/150", 
    price: "$129.99",
    description: "Track your fitness goals and stay connected with this stylish and feature-packed smartwatch."
  },
  { 
    id: 8, 
    title: "Latest smartphone model", 
    category: "Mobile", 
    image: "/api/placeholder/200/150", 
    price: "$899.99",
    description: "Stay at the cutting edge of technology with our latest smartphone featuring an advanced camera system and long battery life."
  }
];

function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showQuickResults, setShowQuickResults] = useState(false);
  
  // استخراج البريد الإلكتروني من الـ URL عند تحميل الصفحة
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const email = params.get('email');
    if (email) {
      setUserEmail(email);
    }
  }, [location.search]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Show quick results if query is not empty
    if (query.trim() !== '') {
      // Filter quick search products based on query
      const filteredResults = quickSearchProducts.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
      setShowQuickResults(true);
    } else {
      setShowQuickResults(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    
    // توجيه المستخدم إلى صفحة لوحة التحكم مع تمرير البريد الإلكتروني وكلمة البحث
    if (searchQuery.trim() !== '') {
      navigate(`/dashboard?email=${encodeURIComponent(userEmail)}&query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const goToDashboard = () => {
    navigate(`/dashboard?email=${encodeURIComponent(userEmail)}`);
  };

  const goToPopularCategories = () => {
    navigate('/popular-categories');
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <h1 className="site-title">Electron_X_HubX</h1>
        {userEmail && (
          <div className="user-info">
            Hello!! {userEmail}
            <Link to="/login" className="logout-link">Logout</Link>
          </div>
        )}
      </div>
      
      <div className="search-content">
        <div className="search-greeting">
          <h2>Hello, How can we help you?</h2>
        </div>
        
        <form onSubmit={handleSearchSubmit} className="search-form">
          <div className="search-input-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Enter something..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </div>
        </form>
        
        {/* Quick search results */}
        {showQuickResults && searchResults.length > 0 && (
          <div className="quick-search-results">
            <h3>Quick Results</h3>
            <div className="results-grid">
              {searchResults.map(product => (
                <div 
                  key={product.id} 
                  className="result-card"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="result-image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="result-info">
                    <h4>{product.title}</h4>
                    <p className="result-category">{product.category}</p>
                    <p className="result-price">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="navigation-buttons">
          {/* زر لوحة التحكم */}
          <button onClick={goToDashboard} className="dashboard-button">
            Go to Dashboard
          </button>
        </div>
        
        <div className="appliances-bg"></div>
      </div>
      
      <div className="search-footer">
        <div className="wave-design"></div>
      </div>

      {/* Modal for product details */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

export default Search;