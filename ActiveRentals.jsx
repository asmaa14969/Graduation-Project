import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ActiveRentals.css';
import ProductModal from './ProductModal';

// بيانات الأجهزة المستأجرة
const rentalData = [
  {
    id: "ARNT15365",
    deviceName: "Huawei Watch Fit Smart watch",
    deviceImage: "/api/placeholder/50/50",
    condition: "Good",
    startDate: "10 Feb 2023",
    endDate: "10 Mar 2023",
    totalCost: "479 EGP",
    paid: true,
    // Adding product details for modal
    description: "Track your fitness goals with this stylish smartwatch featuring heart rate monitoring and long battery life.",
    category: "Gadgets",
    price: "479 EGP"
  },
  {
    id: "ARNT66372",
    deviceName: "HP elitex 10.5",
    deviceImage: "/api/placeholder/50/50",
    condition: "Good",
    startDate: "05 Jan 2023",
    endDate: "20 Jan 2023",
    totalCost: "700 EGP",
    paid: false,
    description: "Powerful tablet with premium features designed for professional use with touch screen functionality.",
    category: "Computers",
    price: "700 EGP"
  },
  {
    id: "ARNT48225",
    deviceName: "LG G3 D-858 3GB/32GB",
    deviceImage: "/api/placeholder/50/50",
    condition: "Fair",
    startDate: "25 Feb 2023",
    endDate: "01 Mar 2023",
    totalCost: "400 EGP",
    paid: true,
    description: "Feature-packed smartphone with 3GB RAM and 32GB storage for smooth multitasking.",
    category: "Mobile",
    price: "400 EGP"
  },
  {
    id: "ARNT45214",
    deviceName: "Samsung Microwave oven 27L",
    deviceImage: "/api/placeholder/50/50",
    condition: "Fair",
    startDate: "01 Feb 2023",
    endDate: "28 Feb 2023",
    totalCost: "999 EGP",
    paid: true,
    description: "Spacious 27L microwave with multiple cooking modes and easy-to-use digital controls.",
    category: "Kitchen",
    price: "999 EGP"
  },
  {
    id: "ARNT42179",
    deviceName: "Philips Air fryer 7 1100 watts",
    deviceImage: "/api/placeholder/50/50",
    condition: "Good",
    startDate: "03 Mar 2023",
    endDate: "30 Mar 2023",
    totalCost: "595 EGP",
    paid: false,
    description: "Cook healthier meals with less oil using this powerful 1100-watt air fryer.",
    category: "Kitchen",
    price: "595 EGP"
  },
  {
    id: "ARNT19438",
    deviceName: "Samsung Ultra 5G Gas refrigerator",
    deviceImage: "/api/placeholder/50/50",
    condition: "New",
    startDate: "15 Mar 2023",
    endDate: "28 Apr 2023",
    totalCost: "1890 EGP",
    paid: true,
    description: "Advanced refrigerator with energy-efficient cooling system and spacious interior.",
    category: "Appliances",
    price: "1890 EGP"
  },
  {
    id: "ARNT57220",
    deviceName: "Tornado - Veg Level Washing Machine",
    deviceImage: "/api/placeholder/50/50",
    condition: "New",
    startDate: "07 Apr 2023",
    endDate: "10 Apr 2023",
    totalCost: "2000 EGP",
    paid: true,
    description: "High-efficiency washing machine with specialized vegetable washing capabilities.",
    category: "Appliances",
    price: "2000 EGP"
  },
  {
    id: "ARNT20137",
    deviceName: "Black & Decker Microwave",
    deviceImage: "/api/placeholder/50/50",
    condition: "Good",
    startDate: "26 Feb 2023",
    endDate: "08 Mar 2023",
    totalCost: "1200 EGP",
    paid: false,
    description: "Reliable microwave with multiple power settings and quick heating technology.",
    category: "Kitchen",
    price: "1200 EGP"
  },
  {
    id: "ARNT17196",
    deviceName: "Samsung Galaxy S22 Ultra",
    deviceImage: "/api/placeholder/50/50",
    condition: "New",
    startDate: "09 Mar 2023",
    endDate: "16 Mar 2023",
    totalCost: "2200 EGP",
    paid: true,
    description: "Premium smartphone featuring advanced camera system and powerful processing capabilities.",
    category: "Mobile",
    price: "2200 EGP"
  },
  {
    id: "ARNT42043",
    deviceName: "Hoover 2376 Sucker Vacuum Cleaner",
    deviceImage: "/api/placeholder/50/50",
    condition: "Fair",
    startDate: "27 Feb 2023",
    endDate: "28 Mar 2023",
    totalCost: "3899 EGP",
    paid: false,
    description: "Powerful vacuum cleaner with superior suction power for thorough cleaning of all surfaces.",
    category: "Appliances",
    price: "3899 EGP"
  }
];

// قائمة الفئات الموجودة في القائمة الجانبية
const categories = [
  { id: "dashboard", name: "Dashboard", icon: "🏠" },
  { id: "popular-categories", name: "Popular Categories", icon: "🔖" },
  { id: "active-rentals", name: "Active Rentals", icon: "📋" },
  { id: "product-management", name: "Product Management", icon: "📦" },
  { id: "top-selling-products", name: "Top Selling Products", icon: "🏆", subCategory: true },
  { id: "recently-added-items", name: "Recently Added Items", icon: "🆕", subCategory: true },
  { id: "calendar", name: "Calendar", icon: "📅" },
  { id: "promo-campaigns", name: "Promo Campaigns", icon: "🎯" },
  { id: "analytics", name: "Analytics", icon: "📊" },
  { id: "user-feedback", name: "User Feedback", icon: "📝" },
  { id: "settings", name: "Settings", icon: "⚙️" }
];

function ActiveRentals() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('active-rentals');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    
    // التنقل بين الصفحات المختلفة عند النقر على العناصر في القائمة الجانبية
    if (categoryId === 'dashboard') {
      navigate('/dashboard');
    } else if (categoryId === 'popular-categories') {
      navigate('/popular-categories');
    } else if (categoryId === 'settings') {
      navigate('/settings');
    } else if (categoryId === 'calendar') {
      navigate('/calendar');
    } else if (categoryId === 'promo-campaigns') {
      navigate('/promo-campaigns');
    } else if (categoryId === 'analytics') {
      navigate('/analytics');
    } else if (categoryId === 'user-feedback') {
      navigate('/user-feedback');
    } else if (categoryId === 'product-management') {
      navigate('/product-management');
    }
  };

  // دالة لاختيار المنتج وعرض التفاصيل في النافذة المنبثقة
  const handleProductSelect = (product) => {
    // تحويل بيانات المنتج المستأجر إلى التنسيق المطلوب للـ ProductModal
    const modalProduct = {
      title: product.deviceName,
      image: product.deviceImage,
      category: product.category,
      price: product.totalCost,
      description: product.description
    };
    
    setSelectedProduct(modalProduct);
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
        <div className="rentals-header">
          <h1>Active Rentals</h1>
          <div className="header-actions">
            <div className="search-icon">
              <button>🔍</button>
            </div>
            <div className="notification-icon">
              <button>🔔</button>
            </div>
            <div className="sign-up-button">
              <button>Sign up</button>
            </div>
          </div>
        </div>

        <div className="rentals-table-container">
          <table className="rentals-table">
            <thead>
              <tr>
                <th>Rental ID</th>
                <th>Device Image</th>
                <th>Device Name</th>
                <th>Condition</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Total cost</th>
              </tr>
            </thead>
            <tbody>
              {rentalData.map((rental) => (
                <tr 
                  key={rental.id} 
                  onClick={() => handleProductSelect(rental)}
                  style={{ cursor: 'pointer' }}
                >
                  <td>{rental.id}</td>
                  <td>
                    <img 
                      src={rental.deviceImage} 
                      alt={rental.deviceName} 
                      className="device-thumbnail"
                    />
                  </td>
                  <td>{rental.deviceName}</td>
                  <td>
                    <span className={`condition-tag ${rental.condition.toLowerCase()}`}>
                      {rental.condition}
                    </span>
                  </td>
                  <td>{rental.startDate}</td>
                  <td>{rental.endDate}</td>
                  <td>
                    <div className="cost-details">
                      <span className="cost-amount">{rental.totalCost}</span>
                      <span className={`payment-status ${rental.paid ? 'paid' : 'unpaid'}`}>
                        {rental.paid ? '( Paid )' : '( Unpaid )'}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* إضافة ProductModal للعرض عند اختيار منتج */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

export default ActiveRentals;