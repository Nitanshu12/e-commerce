// src/pages/Home.jsx

import '../styles/shared/general.css';
import '../styles/shared/amazon-header.css';
import '../styles/pages/amazon.css';

import amazonLogo from '../assets/images/amazon-logo-white.png';
import amazonMobileLogo from '../assets/images/amazon-mobile-logo-white.png';
import searchIcon from '../assets/images/icons/search-icon.png';
import cartIcon from '../assets/images/icons/cart-icon.png';

export default function Home() {
  return (
    <>
      <div className="amazon-header">
        <div className="amazon-header-left-section">
          <a href="/" className="header-link">
            <img className="amazon-logo" src={amazonLogo} alt="Amazon Logo" />
            <img
              className="amazon-mobile-logo"
              src={amazonMobileLogo}
              alt="Amazon Mobile Logo"
            />
          </a>
        </div>

        <div className="amazon-header-middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src={searchIcon} alt="Search" />
          </button>
        </div>

        <div className="amazon-header-right-section">
          <a className="orders-link header-link" href="/orders">
            <span className="returns-text">Returns</span>
            <span className="orders-text">& Orders</span>
          </a>

          <a className="cart-link header-link" href="/checkout">
            <img className="cart-icon" src={cartIcon} alt="Cart" />
            <div className="cart-quantity js-cart-quantity">0</div>
            <div className="cart-text">Cart</div>
          </a>
        </div>
      </div>

      <div className="main">
        <div className="products-grid js-products-grid">
          {/* Product items will be rendered here dynamically */}
        </div>
      </div>
    </>
  );
}
