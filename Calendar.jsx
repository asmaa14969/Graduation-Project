import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import './Calendar.css';
import ProductModal from './ProductModal';

// بيانات المنتجات للجدول الزمني
const calendarProducts = [
  { 
    id: 301, 
    title: "Camera", 
    category: "Electronics", 
    image: "/api/placeholder/200/150", 
    price: "$299.99",
    date: "2025-03-01",
    description: "High-resolution digital camera with advanced features for professional photography."
  },
  { 
    id: 302, 
    title: "Coffee Machine", 
    category: "Kitchen", 
    image: "/api/placeholder/200/150", 
    price: "$149.99",
    date: "2025-03-04",
    description: "Premium coffee maker with multiple brewing options and programmable timer."
  },
  { 
    id: 303, 
    title: "machine makes popcorn", 
    category: "Kitchen", 
    image: "/api/placeholder/200/150", 
    price: "$49.99",
    date: "2025-03-09",
    description: "Make delicious popcorn at home with this easy-to-use popcorn machine."
  },
  { 
    id: 304, 
    title: "Sony TV", 
    category: "Electronics", 
    image: "/api/placeholder/200/150", 
    price: "$899.99",
    date: "2025-03-13",
    added: true,
    description: "Experience stunning picture quality with this Sony 4K Smart TV featuring HDR."
  },
  { 
    id: 305, 
    title: "Air fryer", 
    category: "Kitchen", 
    image: "/api/placeholder/200/150", 
    price: "$129.99",
    date: "2025-03-17",
    description: "Cook healthier meals with less oil using this advanced air fryer with multiple cooking modes."
  },
  { 
    id: 306, 
    title: "AirPods", 
    category: "Audio", 
    image: "/api/placeholder/200/150", 
    price: "$199.99",
    date: "2025-03-07",
    added: true,
    description: "Enjoy premium wireless audio with these comfortable and stylish earbuds."
  },
  { 
    id: 307, 
    title: "iPhone 15 Pro Max", 
    category: "Mobile", 
    image: "/api/placeholder/200/150", 
    price: "$1099.99",
    date: "2025-03-27",
    added: true,
    description: "The latest flagship smartphone featuring cutting-edge camera technology and powerful performance."
  },
  { 
    id: 308, 
    title: "Samsung washing", 
    category: "Appliances", 
    image: "/api/placeholder/200/150", 
    price: "$599.99",
    date: "2025-03-29",
    description: "Efficient and quiet washing machine with advanced cleaning technology."
  },
  { 
    id: 309, 
    title: "HP Dell laptop", 
    category: "Computers", 
    image: "/api/placeholder/200/150", 
    price: "$899.99",
    date: "2025-03-31",
    description: "Powerful laptop for work and entertainment with the latest processor and ample storage."
  }
];

// قائمة الفئات الموجودة في القائمة الجانبية (نفس القائمة من Dashboard)
const categories = [
  { id: "dashboard", name: "Dashboard", icon: "🏠" },
  { id: "popular-categories", name: "Popular Categories", icon: "🔖" },
  { id: "active-rentals", name: "Active Rentals", icon: "📋" },
  { id: "recent-shopping", name: "Recent Shopping", icon: "🛒" },
  { id: "recent-viewed", name: "Recent Viewed", icon: "👁️" },
  { id: "offers-discounts", name: "Offers & Discounts", icon: "🔖" },
  { id: "top-rated", name: "Top Rated Products", icon: "⭐" },
  { id: "recently-added", name: "Recently Added Items", icon: "🆕" },
  { id: "product-categories", name: "Product Categories", icon: "📂" },
  { id: "kitchen", name: "Kitchen", icon: "🍳", subCategory: true },
  { id: "electronics", name: "Electronics", icon: "📱", subCategory: true },
  { id: "appliances", name: "Appliances", icon: "🧹", subCategory: true },
  { id: "audio", name: "Audio", icon: "🎧", subCategory: true },
  { id: "calender", name: "Calender", icon: "📅" },
  { id: "settings", name: "Settings", icon: "⚙️" }
];

// Компонент боковой панели, который будет переиспользован (то же, что и в Dashboard)
function Sidebar({ activeCategory, handleCategoryClick }) {
  return (
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
  );
}

function Calendar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState('calender');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 2)); // March 2025
  
  // استخراج البريد الإلكتروني من الـ URL عند تحميل الصفحة
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const email = params.get('email');
    
    if (email) {
      setUserEmail(email);
    }
  }, [location.search]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    
    // التنقل إلى الصفحات المطلوبة عند النقر على العناصر في القائمة الجانبية
    if (categoryId === 'popular-categories') {
      navigate('/popular-categories');
    } else if (categoryId === 'active-rentals') {
      navigate('/active-rentals');
    } else if (categoryId === 'settings') {
      navigate('/settings');
    } else if (categoryId === 'dashboard') {
      navigate('/dashboard');
    } else if (categoryId === 'recent-shopping') {
      navigate('/recent-shopping');
    } else if (categoryId === 'recent-viewed') {
      navigate('/recent-viewed');
    } else if (categoryId === 'offers-discounts') {
      navigate('/offers-discounts');
    } else if (categoryId === 'top-rated') {
      navigate('/top-rated');
    } else if (categoryId === 'recently-added') {
      navigate('/recently-added-items');
    } else if (categoryId === 'calender') {
      navigate('/calender');
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // إنشاء أيام التقويم
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    // تعديل من الأحد (0) إلى الجمعة (5)
    const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    
    const days = [];
    
    // تعبئة أيام الشهر السابق
    let prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = startDay - 1; i >= 0; i--) {
      const dayNumber = prevMonthDays - i;
      const date = new Date(year, month - 1, dayNumber);
      const formattedDate = formatDate(date);
      
      days.push({
        number: dayNumber,
        date: formattedDate,
        currentMonth: false,
        products: getProductsForDate(formattedDate)
      });
    }
    
    // تعبئة أيام الشهر الحالي
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const formattedDate = formatDate(date);
      
      days.push({
        number: i,
        date: formattedDate,
        currentMonth: true,
        products: getProductsForDate(formattedDate)
      });
    }
    
    // تعبئة أيام الشهر القادم حتى اكتمال الجدول (42 يوم)
    const totalDaysToShow = 42;
    const remainingDays = totalDaysToShow - days.length;
    
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      const formattedDate = formatDate(date);
      
      days.push({
        number: i,
        date: formattedDate,
        currentMonth: false,
        products: getProductsForDate(formattedDate)
      });
    }
    
    return days;
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getProductsForDate = (date) => {
    return calendarProducts.filter(product => product.date === date);
  };

  const calendarDays = renderCalendar();
  const weekDays = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  const monthName = currentMonth.toLocaleString('default', { month: 'long' });
  
  // حساب المنتجات الجديدة والصيانة والطلبات المسبقة لعرض الرسم البياني
  const newProductCount = calendarProducts.filter(p => p.added).length;
  const maintenanceCount = 2; // عدد افتراضي للعرض
  const preOrderCount = 1; // عدد افتراضي للعرض
  const totalAmount = 98.5; // مبلغ افتراضي للعرض

  return (
    <div className="dashboard-container">
      {/* القائمة الجانبية */}
      <Sidebar activeCategory={activeCategory} handleCategoryClick={handleCategoryClick} />

      {/* المحتوى الرئيسي */}
      <div className="main-content">
        {/* شريط العنوان */}
        <div className="dashboard-header">
          <div className="welcome-text">
            <h1>Calender</h1>
            {userEmail && <p>Hello!! {userEmail}</p>}
          </div>
          
          <div className="header-actions">
            <div className="search-box">
              <form>
                <input 
                  type="text"
                  placeholder="Search..." 
                />
                <button type="submit">🔍</button>
              </form>
            </div>
            <div className="notification-icon">
              <span>🔔</span>
            </div>
            <div className="signup-button">
              <button>Sign up</button>
            </div>
          </div>
        </div>

        {/* قسم المخطط الدائري والمعلومات */}
        <div className="calendar-stats">
          <div className="pie-chart">
            <div className="chart-visual">
              <div className="pie-chart-container">
                <svg width="150" height="150" viewBox="0 0 50 50">
                  {/* قطاع أخضر للصيانة */}
                  <circle 
                    cx="25" cy="25" r="20" 
                    fill="transparent" 
                    stroke="#22965e" 
                    strokeWidth="10" 
                    strokeDasharray={`${60 * 1.26} 126`} 
                    strokeDashoffset="0" 
                    transform="rotate(-90, 25, 25)" 
                  />
                  
                  {/* قطاع أحمر للطلبات المسبقة */}
                  <circle 
                    cx="25" cy="25" r="20" 
                    fill="transparent" 
                    stroke="#ed4337" 
                    strokeWidth="10" 
                    strokeDasharray={`${10 * 1.26} 126`} 
                    strokeDashoffset="-75.6" 
                    transform="rotate(-90, 25, 25)" 
                  />
                  
                  {/* قطاع أزرق للمنتجات الجديدة */}
                  <circle 
                    cx="25" cy="25" r="20" 
                    fill="transparent" 
                    stroke="#3d33c9" 
                    strokeWidth="10" 
                    strokeDasharray={`${30 * 1.26} 126`} 
                    strokeDashoffset="-88.2" 
                    transform="rotate(-90, 25, 25)" 
                  />
                  
                  {/* الدائرة الداخلية والنص */}
                  <circle cx="25" cy="25" r="15" fill="white" />
                  <text x="25" y="23" textAnchor="middle" fontSize="4" fontWeight="bold">98.5 EGP</text>
                  <text x="25" y="28" textAnchor="middle" fontSize="2">Total Amount</text>
                </svg>
              </div>
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-color new-product"></span>
                <span>New Product Release</span>
              </div>
              <div className="legend-item">
                <span className="legend-color maintenance"></span>
                <span>Maintenance Schedule</span>
              </div>
              <div className="legend-item">
                <span className="legend-color pre-order"></span>
                <span>Pre-Order Available</span>
              </div>
            </div>
          </div>
          
          <div className="product-calender-info">
            <div className="info-header">
              <h3>Product Calender</h3>
              <span className="calendar-icon">📅</span>
            </div>
            <p>Stay updated with the latest product releases, offers and maintenance schedules. Stay updated with the latest product releases, offers and maintenance schedules.</p>
          </div>
        </div>

        {/* التقويم */}
        <div className="calendar-container">
          <div className="calendar-header">
            <button onClick={goToPreviousMonth} className="month-nav-button">⬅️</button>
            <h2>{monthName}, {currentMonth.getFullYear()}</h2>
            <button onClick={goToNextMonth} className="month-nav-button">➡️</button>
          </div>
          
          <div className="calendar-grid">
            {/* أيام الأسبوع */}
            {weekDays.map((day, index) => (
              <div key={`weekday-${index}`} className="calendar-weekday">{day}</div>
            ))}
            
            {/* أيام الشهر */}
            {calendarDays.map((day, index) => (
              <div 
                key={`day-${index}`} 
                className={`calendar-day ${!day.currentMonth ? 'other-month' : ''}`}
              >
                <div className="day-number">{day.number}</div>
                <div className="day-products">
                  {day.products.map(product => (
                    <div 
                      key={product.id} 
                      className={`product-item ${product.added ? 'added-product' : ''}`}
                      onClick={() => handleProductClick(product)}
                    >
                      {product.title}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for product details */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

export default Calendar;