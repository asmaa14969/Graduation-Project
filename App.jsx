import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandBar from './components/BrandBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import ProductModal from './components/ProductModal';
import PopularCategories from './components/PopularCategories';
import ActiveRentals from './components/ActiveRentals';
import TopRated from './components/TopRated';
import RecentlyAddedItems from './components/RecentlyAddedItems';
import Calendar from './components/Calendar';
import PromoCampaigns from './components/PromoCampaigns';

// HomePage component
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandBar />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/popular-categories" element={<PopularCategories />} />
          <Route path="/active-rentals" element={<ActiveRentals />} />
          <Route path="/productmodal" element={<ProductModal />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/recently-added-items" element={<RecentlyAddedItems />} />
          <Route path="/calender" element={<Calendar />} />
          <Route path="/promo-campaigns" element={<PromoCampaigns />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;