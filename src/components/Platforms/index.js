import React, { useEffect } from 'react';
import './platforms.scss';

const Platforms = ({ getPlatforms, platforms }) => {
  useEffect(() => {
    getPlatforms();
  }, []);

  return (
    <div className="platforms">
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
  )
}

export default Platforms;