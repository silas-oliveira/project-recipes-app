import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SeachBar';

function Header(props) {
  const { title, search } = props;
  const [showSearch, setShowSearch] = useState(false);

  function renderProfileImg() {
    return (
      <img
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="profile Icon"
      />
    );
  }

  return (
    <header className="navbar navbar-light bg-light">
      <div className="container nav nav-tabs">
        <img alt="Logo" src={ profileIcon } width="102" height="30" />
        <span data-testid="page-title" className="custom-h2 text-bolder">{title}</span>
        <div className="d-flex align-items-center header-right-size justify-content-end">
          {search
            ? (
              <div className="remove-button-default-style nav-item ms-2">
                <button
                  type="button"
                  onClick={ () => setShowSearch(!showSearch) }
                  className={ `${showSearch ? 'active' : ''} nav-link` }
                >
                  <img
                    data-testid="search-top-btn"
                    src={ searchIcon }
                    alt="search Icon"
                  />
                </button>
              </div>
            ) : null}
          <Link to="/perfil">
            <button
              type="button"
              className={ `${title === 'Perfil' ? 'active bg-light custom-active' : ''} 
              nav-link` }
            >
              {renderProfileImg()}
            </button>
          </Link>
        </div>
      </div>
      {showSearch ? <SearchBar local={ title } /> : null}
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
