import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RenderIngredients from '../Components/RenderIngredients';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';

function ExplorarComidasIngredientes() {
  const { mealsIngredients } = useContext(ContextAppReceita);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <RenderIngredients ingredients={ mealsIngredients } local="comidas" />
      <Footer />
    </div>
  );
}

export default ExplorarComidasIngredientes;
