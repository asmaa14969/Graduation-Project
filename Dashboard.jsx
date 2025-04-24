import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import ProductModal from './ProductModal';

// بيانات المنتجات المعروضة (يمكن استبدالها بطلب API حقيقي لاحقًا)
const productsData = [
  { 
    id: 1, 
    title: "Air fryer with digital display", 
    category: "Kitchen", 
    image: "/api/placeholder/200/150", 
    price: "$99.99",
    rating: 4.8,
    description: "Cook your favorite foods with less oil using this smart air fryer with digital controls and multiple cooking modes."
  },
  { 
    id: 2, 
    title: "Smart washer and dryer combo", 
    category: "Appliances", 
    image: "/api/placeholder/200/150", 
    price: "$599.99",
    description: "Save space and time with this efficient 2-in-1 washer and dryer combo with smart connectivity features."
  },
  { 
    id: 3, 
    title: "Ultra slim 4K Smart TV", 
    category: "Electronics", 
    image: "/api/placeholder/200/150", 
    price: "$449.99",
    rating: 4.7,
    description: "Experience stunning 4K resolution on this ultra-slim smart TV with integrated streaming services."
  },
  { 
    id: 4, 
    title: "Side-by-side refrigerator with ice maker", 
    category: "Appliances", 
    image: "/api/placeholder/200/150", 
    price: "$1299.99",
    description: "Keep your food fresh with this spacious side-by-side refrigerator featuring a built-in ice maker."
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
    id: 6, 
    title: "Coffee machine with grinder", 
    category: "Kitchen", 
    image: "/api/placeholder/200/150", 
    price: "$199.99",
    description: "Brew the perfect cup of coffee every time with this premium coffee maker featuring a built-in bean grinder."
  },
  { 
    id: 7, 
    title: "Premium wireless headphones", 
    category: "Audio", 
    image: "/api/placeholder/200/150", 
    price: "$149.99",
    rating: 4.9,
    description: "Immerse yourself in rich, high-quality sound with these comfortable wireless headphones with noise cancellation."
  },
  { 
    id: 8, 
    title: "Latest smartphone model", 
    category: "Mobile", 
    image: "/api/placeholder/200/150", 
    price: "$899.99",
    rating: 4.8,
    description: "Stay at the cutting edge of technology with our latest smartphone featuring an advanced camera system and long battery life."
  },
  { 
    id: 9, 
    title: "Foldable OLED laptop", 
    category: "Computers", 
    image: "/api/placeholder/200/150", 
    price: "$1499.99",
    description: "Experience next-generation computing with this innovative foldable OLED laptop with touchscreen capabilities."
  },
  { 
    id: 10, 
    title: "Gaming desktop with RGB lights", 
    category: "Computers", 
    image: "/api/placeholder/200/150", 
    price: "$1899.99",
    description: "Dominate your games with this high-performance gaming desktop featuring customizable RGB lighting."
  },
  { 
    id: 11, 
    title: "Digital piano with weighted keys", 
    category: "Music", 
    image: "/api/placeholder/200/150", 
    price: "$799.99",
    description: "Experience the authentic feel of a grand piano with this digital piano featuring weighted keys."
  },
  { 
    id: 12, 
    title: "Wine cooler and beverage center", 
    category: "Kitchen", 
    image: "/api/placeholder/200/150", 
    price: "$349.99",
    description: "Keep your wine and beverages at the perfect temperature with this stylish and efficient cooler."
  },
  { 
    id: 13, 
    title: "Premium wireless earbuds", 
    category: "Audio", 
    image: "/api/placeholder/200/150", 
    price: "$129.99",
    description: "Enjoy crystal-clear sound and comfortable fit with these premium wireless earbuds."
  },
  { 
    id: 14, 
    title: "OLED 4K TV with surround sound", 
    category: "Electronics", 
    image: "/api/placeholder/200/150", 
    price: "$1299.99",
    description: "Immerse yourself in stunning visuals and rich audio with this OLED 4K TV featuring integrated surround sound."
  },
  { 
    id: 15, 
    title: "Smartphone with advanced camera", 
    category: "Mobile", 
    image: "/api/placeholder/200/150", 
    price: "$749.99",
    description: "Capture professional-quality photos with this smartphone featuring an advanced camera system."
  },
  { 
    id: 16, 
    title: "Coffee maker with timer", 
    category: "Kitchen", 
    image: "/api/placeholder/200/150", 
    price: "$79.99",
    description: "Wake up to fresh coffee every morning with this programmable coffee maker with timer function."
  },
  { 
    id: 17, 
    title: "Handheld vacuum cleaner", 
    category: "Appliances", 
    image: "/api/placeholder/200/150", 
    price: "$89.99",
    description: "Clean hard-to-reach areas with this powerful and portable handheld vacuum cleaner."
  },
  { 
    id: 18, 
    title: "Smart robot vacuum", 
    category: "Appliances", 
    image: "/api/placeholder/200/150", 
    price: "$299.99",
    rating: 4.7,
    description: "Let this smart robot vacuum take care of your floors while you focus on more important things."
  },
  { 
    id: 19, 
    title: "Portable SSD storage", 
    category: "Electronics", 
    image: "/api/placeholder/200/150", 
    price: "$149.99",
    description: "Take your files anywhere with this fast and reliable portable SSD storage device."
  },
  { 
    id: 20, 
    title: "Premium coffee maker", 
    category: "Kitchen", 
    image: "/api/placeholder/200/150", 
    price: "$199.99",
    rating: 4.8,
    description: "Brew barista-quality coffee at home with this premium coffee maker featuring multiple brewing options."
  },
  { 
    id: 21, 
    title: "Smart backpack with USB charger", 
    category: "Travel", 
    image: "/api/placeholder/200/150", 
    price: "$89.99",
    description: "Stay charged on the go with this smart backpack featuring built-in USB charging port."
  },
  // إضافة المنتجات الشائعة من صفحة Popular Categories
  {
    id: 101,
    title: "Henckels Popcorn Machine, Popcorn Maker without Oil",
    category: "Kitchen",
    image: "/api/placeholder/200/200",
    price: "$50",
    soldThisMonth: true,
    featured: true,
    description: "Make healthy popcorn at home with this oil-free popcorn maker. Features easy operation and includes a measuring spoon."
  },
  {
    id: 102,
    title: "Apple iPhone 13 Pro Max 6.7\" A2644 SELA Dual Sim 128GB Blue",
    category: "Mobile",
    image: "/api/placeholder/200/200",
    price: "$950",
    soldThisMonth: true,
    featured: true,
    description: "Experience premium smartphone features with this iPhone 13 Pro Max featuring dual SIM capability and 5G connectivity."
  },
  {
    id: 103,
    title: "Black & Decker Handy Garment Steamer - HST2000",
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
    title: "Xiaomi Robot Vacuum S20 (Black) Up to 6000 of Pet-5200PA",
    category: "Appliances",
    image: "/api/placeholder/200/200",
    price: "$150",
    soldThisMonth: true,
    featured: true,
    rating: 4.7,
    description: "Keep your floors clean effortlessly with this advanced robot vacuum featuring powerful suction and smart navigation technology."
  },
  {
    id: 105,
    title: "De'Longhi ECP35 Coffee Maker with Milk Frothing Nozzle",
    category: "Kitchen",
    image: "/api/placeholder/200/200",
    price: "$120",
    soldThisMonth: false,
    usedBy: 10000,
    featured: true,
    rating: 4.9,
    description: "Make professional-quality espresso at home with this compact coffee maker featuring a milk frothing nozzle."
  },
  {
    id: 106,
    title: "The WF437 Samsung washing features Samsung vibration",
    category: "Appliances",
    image: "/api/placeholder/200/200",
    price: "$500",
    soldThisMonth: true,
    featured: true,
    description: "Experience quiet and efficient laundry with this advanced washing machine featuring vibration reduction technology."
  },
  {
    id: 107,
    title: "Philips AirFryer L - 1400W, 5.0L, 4.3L",
    category: "Kitchen",
    image: "/api/placeholder/200/200",
    price: "$80",
    soldThisMonth: false,
    usedBy: 10000,
    featured: true,
    rating: 4.6,
    description: "Enjoy crispy, delicious food with less oil using this large-capacity air fryer featuring starfish design for even cooking."
  }
];

// بيانات الأجهزة المستأجرة من Active Rentals
const rentalData = [
  {
    id: "ARNT15365",
    deviceName: "Huawei Watch Fit Smart watch",
    deviceImage: "/api/placeholder/50/50",
    condition: "Good",
    startDate: "10 Feb 2023",
    endDate: "10 Mar 2023",
    totalCost: "479 EGP",
    paid: true
  },
  {
    id: "ARNT66372",
    deviceName: "HP elitex 10.5",
    deviceImage: "/api/placeholder/50/50",
    condition: "Good",
    startDate: "05 Jan 2023",
    endDate: "20 Jan 2023",
    totalCost: "700 EGP",
    paid: false
  },
  {
    id: "ARNT48225",
    deviceName: "LG G3 D-858 3GB/32GB",
    deviceImage: "/api/placeholder/50/50",
    condition: "Fair",
    startDate: "25 Feb 2023",
    endDate: "01 Mar 2023",
    totalCost: "400 EGP",
    paid: true
  },
  {
    id: "ARNT45214",
    deviceName: "Samsung Microwave oven 27L",
    deviceImage: "/api/placeholder/50/50",
    condition: "Fair",
    startDate: "01 Feb 2023",
    endDate: "28 Feb 2023",
    totalCost: "999 EGP",
    paid: true
  },
  {
    id: "ARNT42179",
    deviceName: "Philips Air fryer 7 1100 watts",
    deviceImage: "/api/placeholder/50/50",
    condition: "Good",
    startDate: "03 Mar 2023",
    endDate: "30 Mar 2023",
    totalCost: "595 EGP",
    paid: false
  },
  {
    id: "ARNT19438",
    deviceName: "Samsung Ultra 5G Gas refrigerator",
    deviceImage: "/api/placeholder/50/50",
    condition: "New",
    startDate: "15 Mar 2023",
    endDate: "28 Apr 2023",
    totalCost: "1890 EGP",
    paid: true
  },
  {
    id: "ARNT57220",
    deviceName: "Tornado - Veg Level Washing Machine",
    deviceImage: "/api/placeholder/50/50",
    condition: "New",
    startDate: "07 Apr 2023",
    endDate: "10 Apr 2023",
    totalCost: "2000 EGP",
    paid: true
  },
  {
    id: "ARNT20137",
    deviceName: "Black & Decker Microwave",
    deviceImage: "/api/placeholder/50/50",
    condition: "Good",
    startDate: "26 Feb 2023",
    endDate: "08 Mar 2023",
    totalCost: "1200 EGP",
    paid: false
  },
  {
    id: "ARNT17196",
    deviceName: "Samsung Galaxy S22 Ultra",
    deviceImage: "/api/placeholder/50/50",
    condition: "New",
    startDate: "09 Mar 2023",
    endDate: "16 Mar 2023",
    totalCost: "2200 EGP",
    paid: true
  },
  {
    id: "ARNT42043",
    deviceName: "Hoover 2376 Sucker Vacuum Cleaner",
    deviceImage: "/api/placeholder/50/50",
    condition: "Fair",
    startDate: "27 Feb 2023",
    endDate: "28 Mar 2023",
    totalCost: "3899 EGP",
    paid: false
  }
];

// بيانات المنتجات المضافة حديثاً
const recentlyAddedItems = [
  { 
    id: 201, 
    title: "Apple 11.5\" iPad Pro Retina Display", 
    category: "Electronics", 
    image: "/api/placeholder/200/150", 
    price: "$799.99",
    isNew: true,
    description: "The latest iPad Pro featuring a stunning Retina display, powerful processor, and all-day battery life."
  },
  { 
    id: 202, 
    title: "DELL Alienware Aurora R15 Gaming Desktop", 
    category: "Computers", 
    image: "/api/placeholder/200/150", 
    price: "$1999.99",
    isNew: true,
    description: "Dominate your games with this high-performance gaming desktop featuring the latest graphics and processing technology."
  },
  { 
    id: 203, 
    title: "Samsung QLED 4K TV 55\"", 
    category: "Electronics", 
    image: "/api/placeholder/200/150", 
    price: "$899.99",
    isNew: true,
    description: "Experience stunning 4K resolution and vibrant colors with this QLED TV featuring smart capabilities."
  },
  { 
    id: 204, 
    title: "Sony WH-1000XM5 Wireless Headphones", 
    category: "Audio", 
    image: "/api/placeholder/200/150", 
    price: "$349.99",
    isNew: true,
    description: "Enjoy industry-leading noise cancellation and exceptional sound quality with these premium wireless headphones."
  },
  { 
    id: 205, 
    title: "Philips XXL Air Fryer", 
    category: "Kitchen", 
    image: "/api/placeholder/200/150", 
    price: "$199.99",
    isNew: true,
    description: "Cook for the whole family with this extra-large capacity air fryer featuring multiple cooking functions."
  },
  { 
    id: 206, 
    title: "LG Portable AC with Dehumidifier", 
    category: "Appliances", 
    image: "/api/placeholder/200/150", 
    price: "$499.99",
    isNew: true,
    description: "Stay cool and comfortable with this portable air conditioner that also functions as a dehumidifier."
  },
  { 
    id: 207, 
    title: "iPhone 15 Pro Max", 
    category: "Mobile", 
    image: "/api/placeholder/200/150", 
    price: "$1099.99",
    isNew: true,
    description: "The latest flagship smartphone featuring cutting-edge camera technology and the most powerful iPhone chip ever."
  },
  { 
    id: 208, 
    title: "Samsung Front Loading Washing Machine", 
    category: "Appliances", 
    image: "/api/placeholder/200/150", 
    price: "$799.99",
    isNew: true,
    description: "This energy-efficient washing machine features smart connectivity and advanced cleaning technology."
  },
  { 
    id: 209, 
    title: "Coffee Pro Smart Espresso Machine", 
    category: "Kitchen", 
    image: "/api/placeholder/200/150", 
    price: "$399.99",
    isNew: true,
    description: "Make barista-quality coffee at home with this smart espresso machine featuring app connectivity."
  }
];

// قائمة الفئات الموجودة في القائمة الجانبية (تم تحديثها لتشمل Promo Campaigns)
const categories = [
  { id: "dashboard", name: "Dashboard", icon: "🏠" },
  { id: "popular-categories", name: "Popular Categories", icon: "🔖" },
  { id: "active-rentals", name: "Active Rentals", icon: "📋" },
  { id: "recent-shopping", name: "Recent Shopping", icon: "🛒" },
  { id: "recent-viewed", name: "Recent Viewed", icon: "👁️" },
  { id: "offers-discounts", name: "Offers & Discounts", icon: "🔖" },
  { id: "top-rated", name: "Top Rated Products", icon: "⭐" },
  { id: "recently-added", name: "Recently Added Items", icon: "🆕" },
  { id: "calender", name: "Calender", icon: "📅" },
  { id: "promo-campaigns", name: "Promo Campaigns", icon: "🎯" },
  { id: "product-categories", name: "Product Categories", icon: "📂" },
  { id: "kitchen", name: "Kitchen", icon: "🍳", subCategory: true },
  { id: "electronics", name: "Electronics", icon: "📱", subCategory: true },
  { id: "appliances", name: "Appliances", icon: "🧹", subCategory: true },
  { id: "audio", name: "Audio", icon: "🎧", subCategory: true },
  { id: "settings", name: "Settings", icon: "⚙️" }
];

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('dashboard');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // استخراج البريد الإلكتروني وكلمة البحث من الـ URL عند تحميل الصفحة
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const email = params.get('email');
    const query = params.get('query');
    
    if (email) {
      setUserEmail(email);
    }
    
    if (query) {
      setSearchQuery(query);
    }
  }, [location.search]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // هنا يمكن إضافة منطق البحث الفعلي
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    
    // التنقل إلى الصفحات المطلوبة عند النقر على العناصر في القائمة الجانبية
    if (categoryId === 'popular-categories') {
      navigate('/popular-categories');
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
    } else if (categoryId === 'top-rated') {
      navigate('/top-rated');
    } else if (categoryId === 'recently-added') {
      navigate('/recently-added-items');
    } else if (categoryId === 'dashboard') {
      navigate('/dashboard');
    } else if (categoryId === 'calender') {
      navigate('/calender');
    } else if (categoryId === 'promo-campaigns') {
      navigate('/promo-campaigns');
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // تصفية المنتجات بناءً على الفئة النشطة أو البحث
  const filteredProducts = productsData.filter(product => {
    // تصفية بناءً على كلمة البحث
    if (searchQuery) {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             product.category.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    // تصفية بناءً على الفئة المحددة
    if (activeCategory !== 'dashboard' && 
        activeCategory !== 'recent-shopping' && 
        activeCategory !== 'recent-viewed' && 
        activeCategory !== 'offers-discounts' && 
        activeCategory !== 'product-categories' && 
        activeCategory !== 'active-rentals' &&
        activeCategory !== 'popular-categories' &&
        activeCategory !== 'settings' &&
        activeCategory !== 'top-rated' &&
        activeCategory !== 'calender' &&
        activeCategory !== 'promo-campaigns' &&
        activeCategory !== 'recently-added') {
      return product.category.toLowerCase() === activeCategory;
    }
    
    return true;
  });

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
        {/* شريط العنوان */}
        <div className="dashboard-header">
          <div className="welcome-text">
            <h1>Welcome</h1>
            {userEmail && <p>Hello!! {userEmail}</p>}
          </div>
          
          <div className="header-actions">
            <div className="search-box">
              <form onSubmit={handleSearchSubmit}>
                <input 
                  type="text"
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button type="submit">🔍</button>
              </form>
            </div>
            <Link to="/search" className="back-to-search">
              🔄 Return to Search
            </Link>
            <Link to="/login" className="logout-button">
              🚪 Logout
            </Link>
          </div>
        </div>

        {/* روابط سريعة للأقسام الشائعة */}
        <div className="quick-links">
          <h2>Quick Access</h2>
          <div className="quick-links-container">
            <Link to="/popular-categories" className="quick-link">
              Popular Categories
            </Link>
            <Link to="/active-rentals" className="quick-link">
              Active Rentals
            </Link>
            <Link to="/recent-shopping" className="quick-link">
              Recent Shopping
            </Link>
            <Link to="/top-rated" className="quick-link">
              Top Rated Products
            </Link>
            <Link to="/recently-added-items" className="quick-link">
              Recently Added Items
            </Link>
            <Link to="/calender" className="quick-link">
              Calender
            </Link>
            <Link to="/promo-campaigns" className="quick-link">
              Promo Campaigns
            </Link>
          </div>
        </div>

        {/* المنتجات */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                {product.isNew && <span className="new-tag">NEW!</span>}
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price}</p>
                {product.soldThisMonth && <span className="sold-tag">Sold this month</span>}
                {product.rating && (
                  <div className="product-rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className={`star ${index < Math.floor(product.rating) ? 'filled' : 'empty'}`}>
                        {index < Math.floor(product.rating) ? '★' : '☆'}
                      </span>
                    ))}
                    <span className="rating-number">({product.rating})</span>
                  </div>
                )}
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

export default Dashboard;