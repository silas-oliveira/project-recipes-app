import React, { useContext, useState, useEffect } from 'react';
import { getAreas } from '../services/requestApi';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';

function RenderAreaOptions() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    async function getAreasFunc() {
      const response = await getAreas();
      setAreas(response);
      console.log(response);
    }
    getAreasFunc();
  }, []);

  return (
    <select data-testid="explore-by-area-dropdown">
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
