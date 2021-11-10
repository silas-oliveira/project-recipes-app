import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/requestApi';

const MAX_CATEGORIES = 5;

function RenderCategories(props) {
  const { local } = props;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategoriesFunc() {
      const categoriesRes = await getCategories(local);
      setCategories(categoriesRes);
    }
    getCategoriesFunc();
  }, [local]);

  return (
    <div>
      {categories.slice(0, MAX_CATEGORIES).map(({ strCategory }) => (
        <button
          data-testid={ `${strCategory}-category-filter` }
          key={ strCategory }
          type="button"
          className="btn btn-outline-primary m-1"
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
