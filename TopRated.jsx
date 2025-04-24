import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopRated.css'; 
import ProductModal from './ProductModal';

// بيانات المنتجات الأعلى تقييماً
const topRatedProducts = [
  {
    id: 1,
    title: "Premier Coffee Machine",
    image: "/api/placeholder/200/150",
    category: "Kitchen",
    price: "2499 EGP",
    rating: 5,
    description: "Premium coffee machine with built-in grinder and multiple brewing options. Perfect for coffee enthusiasts who appreciate quality and convenience."
  },
  {
    id: 2,
    title: "Smart Water Purifier",
    image: "/api/placeholder/200/150",
    category: "Home",
    price: "1899 EGP",
    rating: 4.5,
    description: "Advanced water purification system with smart monitoring. Track water quality and filter status from your smartphone."
  },
  {
    id: 3,
    title: "Robot Vacuum Cleaner",
    image: "/api/placeholder/200/150",
    category: "Appliances",
    price: "3599 EGP",
    rating: 4.7,
    description: "Smart robot vacuum with mapping technology and powerful suction. Compatible with voice assistants for hands-free cleaning."
  },
  {
    id: 4,
    title: "Wireless Speaker System",
    image: "/api/placeholder/200/150",
    category: "Electronics",
    price: "1200 EGP",
    rating: 4.8,
    description: "Premium wireless speaker system with rich sound quality and multi-room capabilities. Connect to your favorite streaming services."
  },
  {
    id: 5,
    title: "Digital Safe Box",
    image: "/api/placeholder/200/150",
    category: "Security",
    price: "2100 EGP",
    rating: 4.9,
    description: "Secure digital safe with fingerprint and PIN access. Keep your valuables protected with this durable and reliable safe."
  },
  {
    id: 6,
    title: "Professional Camera Kit",
    image: "/api/placeholder/200/150",
    category: "Photography",
    price: "7999 EGP",
    rating: 4.7,
    description: "Complete camera kit for aspiring photographers. Includes camera body, multiple lenses, and accessories."
  },
  {
    id: 7,
    title: "Ultra HD Smart TV",
    image: "/api/placeholder/200/150",
    category: "Entertainment",
    price: "5499 EGP",
    rating: 4.8,
    description: "Crystal clear Ultra HD display with smart features. Access your favorite streaming platforms and enjoy immersive viewing."
  },
  {
    id: 8,
    title: "Wine Cooler Deluxe",
    image: "/api/placeholder/200/150",
    category: "Appliances",
    price: "3299 EGP",
    rating: 4.6,
    description: "Temperature-controlled wine cooler to keep your collection in perfect condition. Stylish design fits into any modern kitchen or dining room."
  },
  {
    id: 9,
    title: "Premium SSD Drive",
    image: "/api/placeholder/200/150",
    category: "Computers",
    price: "1499 EGP",
    rating: 4.8,
    description: "High-speed solid state drive for ultimate computer performance. Dramatically increase loading times and system responsiveness."
  },
  {
    id: 10,
    title: "Smart Home Security System",
    image: "/api/placeholder/200/150",
    category: "Security",
    price: "4299 EGP",
    rating: 4.9,
    description: "Complete smart home security system with cameras, sensors, and 24/7 monitoring capabilities. Control everything from your smartphone."
  },
  {
    id: 11,
    title: "Home Theater Projector",
    image: "/api/placeholder/200/150",
    category: "Entertainment",
    price: "6599 EGP",
    rating: 4.7,
    description: "Theater-quality projector for the ultimate home cinema experience. Enjoy movies, sports, and games on a massive screen."
  },
  {
    id: 12,
    title: "Professional Desk Setup",
    image: "/api/placeholder/200/150",
    category: "Office",
    price: "8999 EGP",
    rating: 4.8,
    description: "Complete professional desk setup including ergonomic chair, adjustable desk, monitor arms, and cable management system."
  }
];

// قائمة الفئات الموجودة في القائمة الجانبية - نفس الفئات الموجودة في ActiveRentals
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

function TopRated() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('top-rated-products');
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
    } else if (categoryId === 'recently-added-items') {
      navigate('/recently-added-items');
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

  // دالة لإنشاء نجوم التقييم
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star empty">☆</span>);
      }
    }
    return stars;
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
            <h1>Top Rated Products</h1>
            <p>View our highest rated products based on customer feedback</p>
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

        <div className="top-rated-intro">
          <div className="intro-content">
            <div className="intro-icon">
              <span>⭐</span>
            </div>
            <div className="intro-text">
              <h2>TOP RATED PRODUCTS</h2>
              <p>These are our most highly rated products based on satisfaction surveys and customer reviews. The goal is to show you the highest quality items with proven performance. Each product has been thoroughly tested and received consistently positive feedback from our users. Looking for a specific solution? Check out these top picks, how does performance compare to competitors?</p>
            </div>
          </div>
          <div className="intro-image">
            <img src="/api/placeholder/120/200" alt="Top rated products" />
          </div>
        </div>

        <div className="products-grid">
          {topRatedProducts.map((product) => (
            <div key={product.id} className="product-card" onClick={() => handleProductSelect(product)}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <div className="product-category">{product.category}</div>
                <div className="product-price">{product.price}</div>
                <div className="product-rating">
                  {renderStars(product.rating)}
                </div>
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

export default TopRated;