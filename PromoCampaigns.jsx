import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PromoCampaigns.css';
import ProductModal from './ProductModal';

// List of categories for the sidebar
const categories = [
  { id: "dashboard", name: "Dashboard", icon: "🏠" },
  { id: "promo-campaigns", name: "Promo Campaigns", icon: "🏷️" },
  { id: "popular-categories", name: "Popular Categories", icon: "🔖" },
  { id: "active-rentals", name: "Active Rentals", icon: "📋" },
  { id: "recent-shopping", name: "Recent Shopping", icon: "🛒" },
  { id: "recent-viewed", name: "Recent Viewed", icon: "👁️" },
  { id: "offers-discounts", name: "Offers & Discounts", icon: "🔖" },
  { id: "top-rated", name: "Top Rated Products", icon: "⭐" },
  { id: "recently-added", name: "Recently Added Items", icon: "🆕" },
  { id: "calender", name: "Calender", icon: "📅" },
  { id: "product-categories", name: "Product Categories", icon: "📂" },
  { id: "kitchen", name: "Kitchen", icon: "🍳", subCategory: true },
  { id: "electronics", name: "Electronics", icon: "📱", subCategory: true },
  { id: "appliances", name: "Appliances", icon: "🧹", subCategory: true },
  { id: "audio", name: "Audio", icon: "🎧", subCategory: true },
  { id: "settings", name: "Settings", icon: "⚙️" }
];

const promoCampaignsData = [
  {
    id: 'best-offers',
    title: 'BEST OFFERS',
    description: 'Discover the top deals this month with discounts up to 50% off on premium electronics and home appliances.',
    bgColor: '#28a745',
    icon: '🔥',
    buttonText: 'SHOP NOW',
    featured: true
  },
  {
    id: 'midnight-sale',
    title: 'MIDNIGHT SALE',
    description: 'Limited time offer! Shop between midnight and 6am for exclusive deals on top brands.',
    bgColor: '#6c3483',
    icon: '🌙',
    buttonText: 'SET REMINDER',
    featured: false
  }
];

const promoProductsData = [
  { 
    id: 301, 
    title: "Premium Coffee Machine", 
    category: "Kitchen", 
    image: "/api/placeholder/200/200", 
    price: "$249.99",
    discount: "15% OFF",
    description: "Enjoy barista-quality coffee at home with this premium coffee maker featuring multiple brewing options."
  },
  { 
    id: 302, 
    title: "Smart Pressure Cooker", 
    category: "Kitchen", 
    image: "/api/placeholder/200/200", 
    price: "$189.99",
    discount: "20% OFF",
    description: "Cook meals up to 70% faster with this smart pressure cooker featuring 10 preset cooking programs."
  },
  { 
    id: 303, 
    title: "Flagship Smartphone", 
    category: "Mobile", 
    image: "/api/placeholder/200/200", 
    price: "$699.99",
    discount: "10% OFF",
    description: "Experience cutting-edge mobile technology with this flagship smartphone featuring an advanced camera system."
  },
  { 
    id: 304, 
    title: "Smart Refrigerator", 
    category: "Appliances", 
    image: "/api/placeholder/200/200", 
    price: "$1299.99",
    discount: "12% OFF",
    description: "Stay organized with this smart refrigerator featuring touchscreen display and Wi-Fi connectivity."
  },
  { 
    id: 305, 
    title: "Wireless Headphones", 
    category: "Audio", 
    image: "/api/placeholder/200/200", 
    price: "$179.99",
    discount: "25% OFF",
    description: "Immerse yourself in rich, high-quality sound with these comfortable wireless headphones with noise cancellation."
  },
  { 
    id: 306, 
    title: "Levitating Speaker", 
    category: "Audio", 
    image: "/api/placeholder/200/200", 
    price: "$129.99",
    discount: "30% OFF",
    description: "Experience unique audio visualization with this floating speaker featuring 360-degree sound projection."
  },
  { 
    id: 307, 
    title: "Smart Washing Machine", 
    category: "Appliances", 
    image: "/api/placeholder/200/200", 
    price: "$499.99",
    discount: "15% OFF",
    description: "Save time with this smart washing machine featuring auto-dosing and Wi-Fi connectivity."
  },
  { 
    id: 308, 
    title: "Next-Gen Gaming Console", 
    category: "Electronics", 
    image: "/api/placeholder/200/200", 
    price: "$599.99",
    discount: "8% OFF",
    description: "Experience next-level gaming with this powerful console featuring ray tracing and ultra-fast loading times."
  },
  { 
    id: 309, 
    title: "Portable Electric Kettle", 
    category: "Kitchen", 
    image: "/api/placeholder/200/200", 
    price: "$49.99",
    discount: "40% OFF",
    description: "Boil water anywhere with this portable electric kettle featuring temperature control and compact design."
  },
  { 
    id: 310, 
    title: "Smart Home Hub", 
    category: "Electronics", 
    image: "/api/placeholder/200/200", 
    price: "$129.99",
    discount: "20% OFF",
    description: "Control all your smart devices from one central hub featuring voice control and automation capabilities."
  }
];

function PromoCampaigns() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('promo-campaigns');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    
    // Navigation logic based on the selected category
    if (categoryId === 'dashboard') {
      navigate('/dashboard');
    } else if (categoryId === 'popular-categories') {
      navigate('/popular-categories');
    } else if (categoryId === 'active-rentals') {
      navigate('/active-rentals');
    } else if (categoryId === 'top-rated') {
      navigate('/top-rated');
    } else if (categoryId === 'recently-added') {
      navigate('/recently-added-items');
    } else if (categoryId === 'calender') {
      navigate('/calender');
    } else if (categoryId === 'promo-campaigns') {
      navigate('/promo-campaigns');
    } else if (categoryId === 'settings') {
      navigate('/settings');
    } else if (categoryId === 'recent-shopping') {
      navigate('/recent-shopping');
    } else if (categoryId === 'recent-viewed') {
      navigate('/recent-viewed');
    } else if (categoryId === 'offers-discounts') {
      navigate('/offers-discounts');
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add actual search logic here
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar directly in the component */}
      <div className="sidebar">
        <div className="company-name">
          <h3>Electron_X_HubX</h3>
        </div>
        <div className="sidebar-items">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`sidebar-item ${activeCategory === category.id ? 'active' : ''} ${category.subCategory ? 'sub-category' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <span className="item-icon">{category.icon}</span>
              <span className="item-name">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="main-content">
        {/* Header section */}
        <div className="dashboard-header">
          <div className="welcome-text">
            <h1>Promo Campaigns</h1>
            <p>Discover our latest promotions and special offers</p>
          </div>
          
          <div className="header-actions">
            <div className="search-box">
              <form onSubmit={handleSearchSubmit}>
                <input 
                  type="text"
                  placeholder="Search promotions..." 
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button type="submit">🔍</button>
              </form>
            </div>
            <Link to="/dashboard" className="back-to-dashboard">
              🔄 Return to Dashboard
            </Link>
            <Link to="/login" className="logout-button">
              🚪 Logout
            </Link>
          </div>
        </div>

        {/* Featured Campaigns Section */}
        <div className="featured-campaigns">
          {promoCampaignsData.map(campaign => (
            <div 
              key={campaign.id} 
              className={`campaign-card ${campaign.featured ? 'featured' : ''}`}
              style={{ backgroundColor: campaign.bgColor }}
            >
              <div className="campaign-content">
                <div className="campaign-icon">{campaign.icon}</div>
                <h2>{campaign.title}</h2>
                <p>{campaign.description}</p>
                <button className="campaign-button">{campaign.buttonText}</button>
              </div>
            </div>
          ))}
        </div>

        {/* Buy Now Section */}
        <div className="promo-section">
          <h2>BUY NOW</h2>
          <div className="promo-products-grid">
            {promoProductsData.map(product => (
              <div 
                key={product.id} 
                className="promo-product-card"
                onClick={() => handleProductClick(product)}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  <span className="discount-tag">{product.discount}</span>
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">{product.price}</p>
                  <button className="buy-now-btn">BUY NOW</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

export default PromoCampaigns;