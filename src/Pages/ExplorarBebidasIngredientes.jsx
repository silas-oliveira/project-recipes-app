import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RenderIngredients from '../Components/RenderIngredients';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';

function ExplorarBebidasIngredientes() {
  const { drinksIngredients } = useContext(ContextAppReceita);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <RenderIngredients ingredients={ drinksIngredients } local="bebidas" />
      <Footer />
    </div>
  );
}

export default ExplorarBebidasIngredientes;
