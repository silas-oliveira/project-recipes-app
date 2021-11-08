import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/perfil">
        <span data-testid="profile-top-btn">Profile</span>
      </Link>
      <span data-testid="page-title">Title</span>
      <span data-testid="search-top-btn">Search</span>
    </header>
  );
}

export default Header;
