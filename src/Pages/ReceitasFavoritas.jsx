import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFavorites } from '../localStorage';
import Header from '../Components/Header';
import RenderMultiplesShare from '../Components/RenderMultiplesShare';
import FavButton from '../Components/FavButton';

const BTN_PRIMARY = 'btn-primary';
const BTN_SECONDARY = 'btn-secondary';

function ReceitasFavoritas() {
  const [curFilter, setCurFilter] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const [curIndex, setCurIndex] = useState('');

  useEffect(() => {
    setFavorites(getFavorites());
    console.log(getFavorites())
  }, []);

  const handleClick = (e) => {
    const { value } = e.target;
    setCurFilter(value);
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

  function renderImgAndName(recipe, index) {
    return (
      <>
        <img
          src={ recipe.image }
          alt={ recipe.name }
          data-testid={ `${index}-horizontal-image` }
          className="img-card2"
        />
        <p
          className={ `text-white font-bolder fs-5 text-shadow-custom
          font-monospace recipe-name-done custom-line-height` }
          data-testid={ `${index}-horizontal-name` }
        >
          {recipe.name}
        </p>
      </>
    );
  }

  return (
    <>
      <Header title="Receitas Favoritas" />
      <div className="container">
        <div className="row my-3">
          <div className="px-1 col">
            <button
              type="button"
              data-testid="filter-by-all-btn"
              className={ `${curFilter === 'All' ? BTN_PRIMARY : BTN_SECONDARY}
                btn opacity-100 btn-all-width` }
              value="All"
              onClick={ handleClick }
            >
              All
            </button>
          </div>
          <div className="px-1 col">
            <button
              type="button"
              data-testid="filter-by-food-btn"
              className={ `${curFilter === 'Food' ? BTN_PRIMARY : BTN_SECONDARY}
                btn opacity-100 btn-all-width` }
              value="Food"
              onClick={ handleClick }
            >
              Food
            </button>
          </div>
          <div className="px-1 col">
            <button
              type="button"
              data-testid="filter-by-drink-btn"
              className={ `${curFilter === 'Drink' ? BTN_PRIMARY : BTN_SECONDARY}
                btn opacity-100 btn-all-width` }
              value="Drink"
              onClick={ handleClick }
            >
              Drink
            </button>
          </div>
        </div>
        <div className="row">
          {favorites !== null && favorites.map((favorite, index) => (
            <div key={ index } className="col-6 col-sm-6 col-lg-4 p-2">
              {/* { mudar aqui, colocar col-12 no lugar de col-6 } */}
              <div className="shadow-custom border-card-custom2 min-card-height">
                <div className="position-relative">
                  <Link
                    to={ `/${favorite.type}s/${favorite.id}` }
                    className="text-decoration-none"
                  >
                    {renderImgAndName(favorite, index)}
                  </Link>
                </div>
                <div className="position-relative my-2">
                  <FavButton
                    recipe={ favorite }
                    index={ index }
                    className="ms-2 remove-button-default-style"
                    classNameImg="custom-fav-button"
                    dataTestId={ `${index}-horizontal-favorite-btn` }
                    onClick={ () => setFavorites(getFavorites()) }
                  />
                  <RenderMultiplesShare
                    id={ favorite.id }
                    type={ favorite.type }
                    index={ index }
                    copied={ curIndex === index }
                    replace="receitas-favoritas"
                    onClick={ () => setCurIndex(index) }
                  />
                  <p
                    className={ `fw-bold mx-2 my-3 fs-6 category-fav
                      font-monospace overflow-auto` }
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    {favorite.area || favorite.alcoholicOrNot
                      ? `${favorite.area
                        || favorite.alcoholicOrNot} - ${favorite.category}`
                      : favorite.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ReceitasFavoritas;
