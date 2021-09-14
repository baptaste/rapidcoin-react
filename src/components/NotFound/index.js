import React from 'react';
import { Link } from 'react-router-dom';

import blockchain from 'src/assets/blockchain.svg';
import blockchainDark from 'src/assets/blockchainDark.svg';
import './notfound.scss';

const NotFound = ({ theme }) => {
  return (
    <div className="not-found">
      <div className="not-found__content">
      <h1 className="not-found__content--title">Oops, the page you're looking for does not exist.</h1>
      <Link to="/" className="goButton goButton__notfound">Go back to the homepage</Link>
      </div>
    <img src={theme === 'dark' ? blockchainDark : blockchain} className="blockchain_img--notfound" alt="Blockchain" />
  </div>
  )
};

export default NotFound;
