import React from 'react';
import { Link } from 'react-router-dom';

const Information = ({ title, informations = [] }) => {
  return (
    <div className="info-section">
      <h3 className="info-title">{title}</h3>
      <ul className="info-list">
        {informations.map((item, index) => (
          <li key={index} className="info-item">
            <Link className="info-link" to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Information;
