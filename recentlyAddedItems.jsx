import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecentlyAddedItems.css'; 
import ProductModal from './ProductModal';

// بيانات المنتجات المضافة حديثًا
const recentlyAddedItems = [
  { 
    id: 201, 
    title: "Apple 11.5\" iPad Pro Retina Display", 
    category: "Electronics", 
    image: "/api/placeholder/200/150", 
    price: "799.99 EGP",
    isNew: true,
    symbol: "📱",
    description: "The latest iPad Pro featuring a stunning Retina display, powerful processor, and all-day battery life."
  },
  { 
    id: 202, 
    title: "DELL Alienware Aurora R15 Gaming Desktop", 
    category: "Computers", 
    image: "/api/placeholder/200/150", 
    price: "1999.99 EGP",
    isNew: true,
    symbol: "🖥️",
    description: "Dominate your games with this high-performance gaming desktop featuring the latest graphics and processing technology."
  },
  { 
    id: 203, 
    title: "Samsung QLED 4K TV 55\"", 
    category: "Electronics", 
    image: "/api/placeholder/200/150", 
    price: "899.99 EGP",
    isNew: true,
    symbol: "📺",
    description: "Experience stunning 4K resolution and vibrant colors with this QLED TV featuring smart capabilities."
  },
  { 
    id: 204, 
    title: "Sony WH-1000XM5 Wireless Headphones", 
    category: "Audio", 
    image: "/api/placeholder/200/150", 
    price: "349.99 EGP",
    isNew: true,
    symbol: "🎧",
    description: "Enjoy industry-leading noise cancellation and exceptional sound quality with these premium wireless headphones."
  },
  { 
    id: 205, 
    title: "Philips XXL Air Fryer", 
    category: "Kitchen", 
    image: "/api/placeholder/200/150", 
    price: "199.99 EGP",
    isNew: true,
    symbol: "🍳",
    description: "Cook for the whole family with this extra-large capacity air fryer featuring multiple cooking functions."
  },
  { 
    id: 206, 
    title: "LG Portable AC with Dehumidifier", 
    category: "Appliances", 
    image: "/api/placeholder/200/150", 
    price: "499.99 EGP",
    isNew: true,
    symbol: "❄️",
    description: "Stay cool and comfortable with this portable air conditioner that also functions as a dehumidifier."
  },
  { 
    id: 207, 
    title: "iPhone 15 Pro Max", 
    category: "Mobile", 
    image: "/api/placeholder/200/150", 
    price: "1099.99 EGP",
    isNew: true,
    symbol: "📱",
    description: "The latest flagship smartphone featuring cutting-edge camera technology and the most powerful iPhone chip ever."
  },
  { 
    id: 208, 
    title: "Samsung Front Loading Washing Machine", 
    category: "Appliances", 
    image: "/api/placeholder/200/150", 
    price: "799.99 EGP",
    isNew: true,
    symbol: "🧺",
    description: "This energy-efficient washing machine features smart connectivity and advanced cleaning technology."
  },
  { 
    id: 209, 
    title: "Coffee Pro Smart Espresso Machine", 
    category: "Kitchen", 
    image: "/api/placeholder/200/150", 
    price: "399.99 EGP",
    isNew: true,
    symbol: "☕",
    description: "Make barista-quality coffee at home with this smart espresso machine featuring app connectivity."
  },
  { 
    id: 210, 
    title: "OPPO Find X7 Ultra 512GB", 
    category: "Mobile", 
    image: "/api/placeholder/200/150", 
    price: "899.99 EGP",
    isNew: true,
    symbol: "📱",
    description: "Experience professional-grade photography with this premium smartphone featuring a revolutionary camera system."
  },
  { 
    id: 211, 
    title: "Sonos Arc Premium Soundbar", 
    category: "Audio", 
    image: "/api/placeholder/200/150", 
    price: "799.99 EGP",
    isNew: true,
    symbol: "🔊",
    description: "Upgrade your home theater with this premium soundbar featuring Dolby Atmos and room-filling sound."
  },
  { 
    id: 212, 
    title: "SteelSeries Arctis Nova Pro Gaming Headset", 
    category: "Gaming", 
    image: "/api/placeholder/200/150", 
    price: "349.99 EGP",
    isNew: true,
    symbol: "🎮",
    description: "Experience premium gaming audio with this professional-grade headset featuring active noise cancellation."
  }
];

// قائمة الفئات الموجودة في القائمة الجانبية - مطابقة للفئات في لوحة التحكم
const categories = [
  { id: "dashboard", name: "Dashboard", icon: "🏠" },
  { id: "popular-categories", name: "Popular Categories", icon: "🔖" },
  { id: "active-rentals", name: "Active Rentals", icon: "📋" },
  { id: "product-management", name: "Product Management", icon: "📦" },
  { id: "top-selling-products", name: "Top Selling Products", icon: "🏆", subCategory: true },
  { id: "top-rated-products", name: "Top Rated Products", icon: "⭐", subCategory: true },
  { id: "recently-added-items", name: "Recently Added Items", icon: "🆕", subCategory: true },
  { id: "calendar", name: "Calendar", icon: "📅" },
  { id: "promo-campaigns", name: "Promo Campaigns", icon: "🎯" },
  { id: "analytics", name: "Analytics", icon: "📊" },
  { id: "user-feedback", name: "User Feedback", icon: "📝" },
  { id: "settings", name: "Settings", icon: "⚙️" }
];

function RecentlyAddedItems() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('recently-added-items');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    
    // التنقل بين الصفحات المختلفة عند النقر على العناصر في القائمة الجانبية
    if (categoryId === 'dashboard') {
      navigate('/dashboard');
    } else if (categoryId === 'popular-categories') {
      navigate('/popular-categories');
    } else if (categoryId === 'active-rentals') {
      navigate('/active-rentals');
    } else if (categoryId === 'product-management') {
      navigate('/product-management');
    } else if (categoryId === 'top-selling-products') {
      navigate('/top-selling-products');
    } else if (categoryId === 'top-rated-products') {
      navigate('/top-rated');
    } else if (categoryId === 'calendar') {
      navigate('/calendar');
    } else if (categoryId === 'promo-campaigns') {
      navigate('/promo-campaigns');
    } else if (categoryId === 'analytics') {
      navigate('/analytics');
    } else if (categoryId === 'user-feedback') {
      navigate('/user-feedback');
    } else if (categoryId === 'settings') {
      navigate('/settings');
    }
  };

  // دالة لعرض تفاصيل المنتج في النافذة المنبثقة
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  // دالة لإغلاق النافذة المنبثقة
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="dashboard-container">
      {/* القائمة الجانبية */}
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

      {/* المحتوى الرئيسي */}
      <div className="main-content">
        <div className="dashboard-header">
          <div className="welcome-text">
            <h1>Recently Added Items</h1>
            <p>Check out our newest products added to our inventory</p>
          </div>
          <div className="header-actions">
            <div className="search-box">
              <form>
                <input type="text" placeholder="Search..." />
                <button type="submit">🔍</button>
              </form>
            </div>
            <a href="#" className="back-to-search">
              <span className="icon">🔔</span>
            </a>
            <a href="#" className="logout-button">
              <span className="icon">👤</span> Sign up
            </a>
          </div>
        </div>

        <div className="recently-added-intro">
          <div className="intro-content">
            <div className="intro-icon">
              <span>🆕</span>
            </div>
            <div className="intro-text">
              <h2>RECENTLY ADDED ITEMS</h2>
              <p>Dealers find our recently-launched products and send it to customers. Our focus is to add products that'll meet customer needs, focusing on the latest technologies. We continuously release new items with the goal of providing more buying options to users. Some top launches include the products below. Go through, find out which ones will boost your business.</p>
            </div>
          </div>
          <div className="intro-image">
            <img src="/api/placeholder/120/200" alt="Recently added products" />
          </div>
        </div>

        <div className="products-grid">
          {recentlyAddedItems.map((product) => (
            <div key={product.id} className="product-card" onClick={() => handleProductSelect(product)}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <div className="new-tag">NEW</div>
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <div className="product-details">
                  <span className="product-symbol">{product.symbol}</span>
                  <span className="product-category">{product.category}</span>
                </div>
                <div className="product-price">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* النافذة المنبثقة لعرض تفاصيل المنتج */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

export default RecentlyAddedItems;