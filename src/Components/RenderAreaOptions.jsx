import React, { useContext, useState, useEffect } from 'react';
import { getAreas, getMealsByArea } from '../services/requestApi';
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
    const response = await getMealsByArea(area);
    setMeals(response);
  }

  return (
    <select data-testid="explore-by-area-dropdown" onChange={ changeArea }>
      <option value="" defaultChecked>Selecione uma área</option>
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
