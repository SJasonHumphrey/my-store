import React from 'react';
import { Link } from 'react-router-dom';
import ShopNew from './../../assets/new.jpeg';
import ShopVintage from './../../assets/vintage.jpeg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopNew})`
          }}
        >
          <Link to="/search/new">
            Shop New
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopVintage})`
          }}
        >
          <Link to="/search/vintage">
            Shop Vintage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
