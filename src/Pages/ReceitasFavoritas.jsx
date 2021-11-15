import React, { useEffect, useState } from 'react';
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

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <h1>Explorar ids</h1>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        className="btn btn-outline-primary m-1"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        className="btn btn-outline-primary m-1"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        className="btn btn-outline-primary m-1"
      >
        Drink
      </button>
      <div>
        { favorites !== null && favorites.map((favorite, index) => (
          <div key={ index }>
            <img
              src={ favorite.image }
              alt={ favorite.name }
              data-testid={ `${index}-horizontal-image` }
            />
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { `${favorite.area || favorite.alcoholicOrNot} - ${favorite.category}`}
            </p>
            <p data-testid={ `${index}-horizontal-name` }>{ favorite.name }</p>
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
