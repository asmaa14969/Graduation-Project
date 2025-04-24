import React from 'react';
import './BrandBar.css';

function BrandBar() {
  return (
    <div className="brand-bar">
      <div className="brand-logo toshiba">TOSHIBA</div>
      <div className="brand-logo lg">LG</div>
      <div className="brand-logo sony">SONY</div>
      <div className="brand-logo samsung">SAMSUNG</div>
    </div>
  );
}

export default BrandBar;