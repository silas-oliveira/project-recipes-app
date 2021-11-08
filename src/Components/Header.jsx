import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const { title, search } = props;
  return (
    <header>
      <span data-testid="page-title">{title}</span>
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile Icon"
        />
      </Link>
      <span data-testid="page-title">Title</span>
      { search ? <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="search Icon"
      /> : null }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool,
};

Header.defaultProps = {
  search: false,
};

export default Header;
