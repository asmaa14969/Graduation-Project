import React from 'react';
import './ElectronicsImage.css';

function ElectronicsImage() {
  return (
    <div className="electronics-container">
      <div className="device refrigerator"></div>
      <div className="device washing-machine"></div>
      <div className="device microwave"></div>
      <div className="device tv"></div>
      <div className="device vacuum"></div>
      <div className="device air-conditioner"></div>
      
      <div className="decoration star">⭐</div>
      <div className="decoration gear">⚙️</div>
      <div className="decoration paper-plane">✈️</div>
    </div>
  );
}

export default ElectronicsImage;