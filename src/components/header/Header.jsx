import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

export const Header = ({headerTitle}) => (
  <div className="header">
    {headerTitle}
    <div className="contact">
      <a href="#">The company</a>
      <a href="#">How we work</a>
      <a href="#">Contact us</a>
    </div>
  </div>
);

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired
}