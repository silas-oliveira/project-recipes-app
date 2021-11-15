import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFavorites } from '../localStorage';
import Header from '../Components/Header';
import RenderMultiplesShare from '../Components/RenderMultiplesShare';
import FavButton from '../Components/FavButton';

function ReceitasFavoritas() {
  const [favorites, setFavorites] = useState([]);
  const [curIndex, setCurIndex] = useState('');

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleClick = (e) => {
    const { value } = e.target;
    switch (value) {
    case 'Food':
      setFavorites(favorites.filter((fav) => fav.type === 'comida'));
      break;
    case 'Drink':
      setFavorites(getFavorites().filter((fav) => fav.type === 'bebida'));
      break;
    default:
      setFavorites(getFavorites());
      break;
    }
  };

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <h1>Explorar ids</h1>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        className="btn btn-outline-primary m-1"
        value="All"
        onClick={ handleClick }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        className="btn btn-outline-primary m-1"
        value="Food"
        onClick={ handleClick }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        className="btn btn-outline-primary m-1"
        value="Drink"
        onClick={ handleClick }
      >
        Drink
      </button>
      <div>
        { favorites !== null && favorites.map((favorite, index) => (
          <div key={ index }>
            <Link to={ `/${favorite.type}s/${favorite.id}` }>
              <img
                src={ favorite.image }
                alt={ favorite.name }
                data-testid={ `${index}-horizontal-image` }
              />
              <p data-testid={ `${index}-horizontal-name` }>{favorite.name}</p>
            </Link>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { `${favorite.area || favorite.alcoholicOrNot} - ${favorite.category}`}
            </p>
            <div>
              <RenderMultiplesShare
                id={ favorite.id }
                type={ favorite.type }
                index={ index }
                copied={ curIndex === index }
                replace="receitas-favoritas"
                onClick={ () => setCurIndex(index) }
              />
              <FavButton
                recipe={ favorite }
                index={ index }
                onClick={ () => setFavorites(getFavorites()) }
              />
            </div>
          </div>
        )) }
      </div>
    </div>
  );
}

export default ReceitasFavoritas;
