import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import {
  getCategories,
  getByCategory,
  getDrinks,
  getMeals } from '../services/requestApi';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';

const MAX_CATEGORIES = 5;

function RenderCategories(props) {
  const { local } = props;
  const [categories, setCategories] = useState([]);
  const [curCategory, setCurCategory] = useState('All');
  const { setMeals, setDrinks } = useContext(ContextAppReceita);

  useEffect(() => {
    async function getCategoriesFunc() {
      const categoriesRes = await getCategories(local);
      setCategories(categoriesRes);
    }
    getCategoriesFunc();
  }, [local]);

  async function setDefaultCategory() {
    setCurCategory('All');
    if (local === 'bebidas') setDrinks(await getDrinks());
    else setMeals(await getMeals());
  }

  async function setCategorie(category) {
    if (category !== curCategory) {
      setCurCategory(category);
      const result = await getByCategory(category, local);
      if (local === 'bebidas') setDrinks(result);
      else setMeals(result);
    } else {
      setDefaultCategory();
    }
  }

  return (
    <div className="row">
      {categories.slice(0, MAX_CATEGORIES).map(({ strCategory }) => (
        <div key={ strCategory } className="p-1 col-sm-6 col-md-4 col-xl-2">
          <Button
            data-testid={ `${strCategory}-category-filter` }
            type="button"
            className={
              `${strCategory === curCategory ? 'btn-secondary' : null}
              btn-all-width btn-shadow-custom`
            }
            onClick={ () => setCategorie(strCategory) }
          >
            {strCategory}
          </Button>
        </div>
      ))}
      <div className="p-1 col-sm-6 col-md-4 col-xl-2">
        <Button
          data-testid="All-category-filter"
          type="button"
          className={
            `${curCategory === 'All' ? 'btn-secondary' : null}
            btn-all-width btn-shadow-custom`
          }
          onClick={ () => setDefaultCategory() }
        >
          All
        </Button>
      </div>
    </div>
  );
}

RenderCategories.propTypes = {
  local: PropTypes.string.isRequired,
};

export default RenderCategories;
