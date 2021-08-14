import React from 'react';
import './menu.scss';

const MobileMenu = ({ isMenuOpen, hideMenu }) => (
  <div className={isMenuOpen ? "menu menu--open" : "menu"}>
    <button
      type="button"
      className="close-menu-btn"
      onClick={hideMenu}>
      <i className="fas fa-times"></i>
    </button>
  </div>
);

export default MobileMenu;