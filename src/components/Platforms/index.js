import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './platforms.scss';

const Platforms = ({ getPlatforms, platforms }) => {
  useEffect(() => {
    getPlatforms();
  }, []);

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <section className="platforms">
      <button type="button" className="goButton goButton__platforms" onClick={handleGoBack}>
        <i className="fas fa-arrow-left" />
        </button>
        <h1 className="platforms__title">Finance Platforms</h1>

      <div className="platforms__container">
      {platforms.map((p) => (
        <ul className="platforms-list" key={p.name} >
          <li className="platform-item platform-name">{p.name}</li>
          <li className="platform-item">{p.category}</li>
          <li className="platform-item">
            {p.centralized === true ? <p>Centralized</p> : <p>Decentralized</p>}
          </li>
          <li className="platform-item">
            <a href={p.website_url} className="platform-url">{p.website_url}</a>
          </li>
        </ul>
      ))}
      </div>

    </section>
  )
}

export default Platforms;