import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import RenderFilterBtn from '../Components/RenderFilterBtn';
import shareIcon from '../images/shareIcon.svg';
import { catchDoneRecipes } from '../localStorage';

function ReceitasFeitas() {
  const INICIAL_INDEX = -1;
  const [copied, setCopied] = useState(false);
  const [index, setIndex] = useState(INICIAL_INDEX);
  const doneRecipes = catchDoneRecipes();

  const [filterRecipes, setFilterRecipes] = useState(doneRecipes);

  const handleClick = (type) => {
    const foodRecipes = doneRecipes.filter((recipe) => recipe.type === 'comida');
    const drinkRecipes = doneRecipes.filter((recipe) => recipe.type === 'bebida');
    switch (type) {
    case 'Food':
      setFilterRecipes(foodRecipes);
      break;
    case 'Drinks':
      setFilterRecipes(drinkRecipes);
      break;
    case 'All':
      setFilterRecipes(doneRecipes);
      break;
    default:
      setCopied(doneRecipes);
      break;
    }
  };

  const shareLink = (id, type, i) => {
    const standartLink = window.location.href;
    const generalType = `${type}s/${id}`;
    copy(standartLink.replace('receitas-feitas', generalType));
    setIndex(i);
    setCopied(true);
  };

  return (
    <div>
      <Header title="Receitas Feitas" />
      <h1>Receitas Feitas</h1>
      <RenderFilterBtn attribute="All" handleClick={ handleClick } />
      <RenderFilterBtn attribute="Food" handleClick={ handleClick } />
      <RenderFilterBtn attribute="Drinks" handleClick={ handleClick } />

      {filterRecipes && filterRecipes.map((recipe, i) => {
        const { id, image, name, category, doneDate,
          tags, area, type, alcoholicOrNot } = recipe;
        return (
          <div key={ id }>
            <Link to={ `${type}s/${id}` }>
              <img
                width="300px"
                src={ image }
                alt={ name }
                data-testid={ `${i}-horizontal-image` }
              />
            </Link>
            <h3 data-testid={ `${i}-horizontal-top-text` }>
              { type === 'comida' ? `${area} - ${category}` : alcoholicOrNot }
            </h3>
            <Link to={ `${type}s/${id}` }>
              <h3 data-testid={ `${i}-horizontal-name` }>{name}</h3>
            </Link>
            <p data-testid={ `${i}-horizontal-done-date` }>{`Feita em: ${doneDate}`}</p>
            <button type="button" onClick={ () => shareLink(id, type, i) }>
              <img
                src={ shareIcon }
                data-testid={ `${i}-horizontal-share-btn` }
                alt="share"
              />
              {copied && index === i && 'Link copiado!'}
            </button>
            {tags.map((tag, idx) => (
              <p
                key={ idx }
                data-testid={ `${i}-${tag}-horizontal-tag` }
              >
                {tag}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default ReceitasFeitas;
