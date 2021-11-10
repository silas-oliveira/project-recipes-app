import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { getCategories, getByCategory, getDrinks, getMeals } from '../services/requestApi';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';

const MAX_CATEGORIES = 5;

function RenderCategories(props) {
  const { local } = props;
  const [categories, setCategories] = useState([]);
  const [curCategory, setCurCategory] = useState('');
  const { setMeals, setDrinks } = useContext(ContextAppReceita);

  useEffect(() => {
    async function getCategoriesFunc() {
      const categoriesRes = await getCategories(local);
      setCategories(categoriesRes);
    }
    getCategoriesFunc();
  }, [local]);

  async function setCategorie(category) {
    if (category !== curCategory) {
      setCurCategory(category);
      const result = await getByCategory(category, local);
      if (local === 'bebidas') setDrinks(result);
      else setMeals(result);
    } else {
      setCurCategory('');
      if (local === 'bebidas') setDrinks(await getDrinks());
      else setMeals(await getMeals());
    }
  }

  return (
    <div>
      {categories.slice(0, MAX_CATEGORIES).map(({ strCategory }) => (
        <button
          data-testid={ `${strCategory}-category-filter` }
          key={ strCategory }
          type="button"
          className="btn btn-outline-primary m-1"
          onClick={ () => setCategorie(strCategory) }
        >
          {strCategory}
        </button>
      ))}
    </div>
  );
}

RenderCategories.propTypes = {
  local: PropTypes.string.isRequired,
};

export default RenderCategories;
