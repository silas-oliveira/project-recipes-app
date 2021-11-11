import React, { useEffect, useState } from 'react';
import { getFavorites } from '../localStorage';
import Header from '../Components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function ReceitasFavoritas() {
  const [favorites, setFavorites] = useState([]);

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
              { `${favorite.area} - ${favorite.category}`}
            </p>
            <p data-testid={ `${index}-horizontal-name` }>{ favorite.name }</p>
            <div>
              <button
                type="button"
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
              >
                <img src={ shareIcon } alt="Compartilhar" />
              </button>
              <button
                type="button"
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ blackHeartIcon }
              >
                <img src={ blackHeartIcon } alt="Favorite" />
              </button>
            </div>
          </div>
        )) }
      </div>
    </div>
  );
}

export default ReceitasFavoritas;
