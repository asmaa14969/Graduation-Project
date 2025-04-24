import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './PopularCategories.css';
import ProductModal from './ProductModal';

const featuredProducts = [
  {
    id: 101,
    title: "Henckels Popcorn Machine, Popcorn Maker without Oil and Oil Hot Air Popcorn for Free Preparation, Easy Operation, Healthy Snack with Sugar or Salt, Includes Measuring Spoon, 1100 W Power",
    category: "Kitchen",
    image: "/api/placeholder/200/200",
    price: "$50",
    soldThisMonth: true,
    featured: true,
    description: "Make healthy popcorn at home with this oil-free popcorn maker. Features easy operation and includes a measuring spoon."
  },
  {
    id: 102,
    title: "Apple iPhone 13 Pro Max 6.7\" A2644 SELA Dual Sim 128GB Blue USA International Version iPhone 12 128GB Midnight 5G With Facetime",
    category: "Mobile",
    image: "/api/placeholder/200/200",
    price: "$950",
    soldThisMonth: true,
    featured: true,
    description: "Experience premium smartphone features with this iPhone 13 Pro Max featuring dual SIM capability and 5G connectivity."
  },
  {
    id: 103,
    title: "Black & Decker Handy Garment Steamer - HST2000 Powerful Continuous 25 g/min 1600W + 15 Min + 270ml Continuous/Fabric Weight=1.0 Kilograms Style=Compact White/Blue",
    category: "Appliances",
    image: "/api/placeholder/200/200",
    price: "$35",
    soldThisMonth: false,
    usedBy: 10000,
    featured: true,
    description: "Keep your clothes wrinkle-free with this powerful garment steamer featuring continuous steam output and compact design."
  },
  {
    id: 104,
    title: "Xiaomi Robot Vacuum S20 (Black) Up to 6000 of Pet-5200PA Vacuum and mop function for deep but frequent dusting. Charging or water tank filling, 400ml dustbin and 270ml water tank. 100-day cleanable LDS laser navigation system",
    category: "Appliances",
    image: "/api/placeholder/200/200",
    price: "$150",
    soldThisMonth: true,
    featured: true,
    description: "Keep your floors clean effortlessly with this advanced robot vacuum featuring powerful suction and smart navigation technology."
  },
  {
    id: 105,
    title: "De'Longhi ECP35 Coffee Maker with Milk Frothing Nozzle, 1100 Watts, Drip Coffee Machines (Color: Bk Adjustable Black Espresso Maker/Jet/Length Delices EC685. BK Adjustable Black Espresso Maker/Length Delices EC685.)",
    category: "Kitchen",
    image: "/api/placeholder/200/200",
    price: "$120",
    soldThisMonth: false,
    usedBy: 10000,
    featured: true,
    description: "Make professional-quality espresso at home with this compact coffee maker featuring a milk frothing nozzle."
  },
  {
    id: 106,
    title: "The WF437 Samsung washing features Samsung vibration which reduces noise and stabilizes during the washing of clothes. This creates virtually vibration-free performance. Those of you who have washing machines located on the second floor.",
    category: "Appliances",
    image: "/api/placeholder/200/200",
    price: "$500",
    soldThisMonth: true,
    featured: true,
    description: "Experience quiet and efficient laundry with this advanced washing machine featuring vibration reduction technology."
  },
  {
    id: 107,
    title: "Philips AirFryer L - 1400W, 5.0L, 4.3L, 0-80°C, Analogue, Touch Air fryer with a capacity of 5 liters, allows you to prepare food with its unique starfish design, needs hot air to create delicious foods that are crispy on the outside.",
    category: "Kitchen",
    image: "/api/placeholder/200/200",
    price: "$80",
    soldThisMonth: false,
    usedBy: 10000,
    featured: true,
    description: "Enjoy crispy, delicious food with less oil using this large-capacity air fryer featuring starfish design for even cooking."
  }
];

// قائمة الفئات الموجودة في القائمة الجانبية
const categories = [
  { id: "dashboard", name: "Dashboard", icon: "🏠" },
  { id: "popular-categories", name: "Popular Categories", icon: "🔖" },
  { id: "active-rentals", name: "Active Rentals", icon: "📋" },
  { id: "recent-shopping", name: "Recent Shopping", icon: "🛒" },
  { id: "recent-viewed", name: "Recent Viewed", icon: "👁️" },
  { id: "offers-discounts", name: "Offers & Discounts", icon: "🔖" },
  { id: "product-categories", name: "Product Categories", icon: "📂" },
  { id: "kitchen", name: "Kitchen", icon: "🍳", subCategory: true },
  { id: "electronics", name: "Electronics", icon: "📱", subCategory: true },
  { id: "appliances", name: "Appliances", icon: "🧹", subCategory: true },
  { id: "audio", name: "Audio", icon: "🎧", subCategory: true },
  { id: "settings", name: "Settings", icon: "⚙️" }
];

function PopularCategories() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('popular-categories');

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    
    // التنقل بين الصفحات المختلفة عند النقر على العناصر في القائمة الجانبية
    if (categoryId === 'dashboard') {
      navigate('/dashboard');
    } else if (categoryId === 'active-rentals') {
      navigate('/active-rentals');
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
        <div className="popular-header">
          <div className="header-title">
            <h1>Popular Categories</h1>
          </div>
          <div className="header-actions">
            <Link to="/dashboard" className="back-to-dashboard">
              Back to Dashboard
            </Link>
            <div className="sign-up-button">
              <button>Sign up</button>
            </div>
          </div>
        </div>

        <div className="featured-products">
          {featuredProducts.map(product => (
            <div key={product.id} className="featured-product-card" onClick={() => handleProductClick(product)}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <div className="product-price">
                  {product.price} {product.soldThisMonth && <span className="sold-tag">+500 sold this month</span>}
                </div>
                {product.usedBy && (
                  <div className="used-by">
                    Used by over <span className="user-count">{product.usedBy.toLocaleString()}</span> customers
                  </div>
                )}
              </div>
              <div className="product-badge">
                <span className="hot-icon">🔥</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for product details */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

export default PopularCategories;