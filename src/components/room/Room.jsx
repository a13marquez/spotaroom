import React from 'react';
import PropTypes from 'prop-types';

import './room.scss';

export const Room = ({img, title, price, currency}) => (
  <div className="room-card">
    <div className="img-container">
      <img src={img} alt="room photo"></img>
    </div>
    <div className="room-info">
      <div className="room-title">
        <span className="title">{title}</span>
        <span className="price-container">
          <span className="price">{price}{currency}</span>
        </span>
      </div>
      <div className="buttons">
        <button className="secondary">More details</button>
        <button className="primary">Book now</button>
      </div>
    </div>
  </div>
);

Room.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}