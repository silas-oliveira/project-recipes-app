import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RenderIngredients from '../Components/RenderIngredients';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';

function ExplorarComidasIngredientes() {
  const { mealsIngredients } = useContext(ContextAppReceita);

  return (
    <>
      <Header title="Explorar Ingredientes" />
      <div className="container">
        <RenderIngredients ingredients={ mealsIngredients } local="comidas" />
      </div>
      <Footer />
    </>
  );
}

export default ExplorarComidasIngredientes;
