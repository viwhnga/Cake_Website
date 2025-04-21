import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <div className="header-top">
          <div className="header-left">
            <div className="header-item">
              USD <i className="fa-solid fa-chevron-down" style={{color: '#8e9295'}} />
              <div className="drop-item">
                <ul>
                  <li><a href="#">EUR</a></li>
                  <li><a href="#">USD</a></li>
                </ul>
              </div>
            </div>
            <div className="header-item">
              ENG <i className="fa-solid fa-chevron-down" style={{color: '#8e9295'}} />
              <div className="drop-item">
                <ul>
                  <li>
                    <a href="#">Stanish</a>
                  </li>
                  <li>
                    <a href="#">ENG</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-item">
              Login
              <i className="fa-solid fa-chevron-down" style={{color: '#8e9295'}} />
            </div>
          </div>
          <div className="header-center">
            <img src="../assets/images/homepage/logo.png" alt="" />
          </div>
          <div className="header-right">
            <div className="search">
              <a href="#"><img src="../assets/images/homepage/search.png" alt="" /></a>
            </div>
            <div className="wishlist">
              <a href="#"><img src="../assets/images/homepage/heart.png" alt="" /></a>
            </div>
            <div className="cart">
              <a href="#"><img src="../assets/images/homepage/cart.png" alt="" /></a>
            </div>
            <div className="cart-content">Cart: <b>$0.00</b></div>
          </div>
        </div>
        <div className="header-nav">
          <li className="menu-item" onClick={() => navigate('/')}>Home</li>
          <li className="menu-item" onClick={() => navigate('/about')} >About</li>
          <li className="menu-item" onClick={() => navigate('/shop')} >Shop</li>
            <li className="menu-item">
              Pages
              <ul className="dropdown">
              <li onClick={() => navigate('/productDetail')}>Shop Details</li>
                <li><Link to="/shopping-cart">Shopping Cart</Link></li>
                <li><Link to="/checkout">Check Out</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/class">Class</Link></li>
                <li><Link to="/wishlist-details">Wishlist Details</Link></li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact">Contact</Link>
            </li>
        </div>
      </header>
    </div>
  )
}
