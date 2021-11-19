import React, { useContext, useState, useEffect } from 'react';
import { getAreas, getMealsByArea, getMeals } from '../services/requestApi';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';

function RenderAreaOptions() {
  const [areas, setAreas] = useState([]);
  const { setMeals } = useContext(ContextAppReceita);

  useEffect(() => {
    async function getAreasFunc() {
      const response = await getAreas();
      setAreas(response);
    }
    getAreasFunc();
  }, []);

  async function changeArea(e) {
    const area = e.target.value;
    if (area === 'All') {
      const response = await getMeals();
      setMeals(response);
    } else {
      const response = await getMealsByArea(area);
      setMeals(response);
    }
  }

  return (
    <select
      data-testid="explore-by-area-dropdown"
      onChange={ changeArea }
      className="form-select my-3"
      aria-label="Selecione uma regiao"
    >
      <option
        value="All"
        data-testid="All-option"
        defaultChecked
      >
        All
      </option>
      {areas.map(({ strArea }) => (
        <option
          key={ strArea }
          value={ strArea }
          data-testid={ `${strArea}-option` }
        >
          { strArea }
        </option>
      ))}
    </select>
  );
}

export default RenderAreaOptions;
