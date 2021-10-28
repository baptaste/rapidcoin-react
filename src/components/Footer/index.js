import React from 'react';
import { getYear } from 'src/utils';

import './footer.scss';

const Footer = () => {
  const year = getYear();
  return (
    <footer className="footer">
      <p>© {year} Rapidcoin. All rights reserved</p>
      <a href="https://github.com/baptaste/rapidcoin-react" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i> Source code
      </a>
    </footer>
  );
};

export default Footer;
