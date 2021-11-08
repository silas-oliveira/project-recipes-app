import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { title } = props;
  return (
    <header>
      <span data-testid="profile-top-btn">Profile</span>
      <span data-testid="page-title">{title}</span>
      <span data-testid="search-top-btn">Search</span>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
