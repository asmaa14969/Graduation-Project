import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill all fields');
      return;
    }
    
    // Reset error if validation passes
    setError('');
    
    console.log('SignUp successed', formData);
    
    // توجيه المستخدم إلى صفحة البحث بعد التسجيل
    navigate('/search?email=' + encodeURIComponent(formData.email));
  };

  return (
    <div className="signup-container">
      <div className="signup-overlay">
        <div className="signup-card">
          <h2 className="signup-title">
            <span className="title-colored">S</span>ign Up
          </h2>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="form-icon">👤</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="User name"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-icon">📧</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-icon">🔒</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          
          <div className="login-link">
            You already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;