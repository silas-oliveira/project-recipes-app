import React, { useContext } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RenderIngredients from '../Components/RenderIngredients';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';

function ExplorarBebidasIngredientes() {
  const { drinksIngredients } = useContext(ContextAppReceita);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <FadeIn>
        <div className="container">
          <RenderIngredients ingredients={ drinksIngredients } local="bebidas" />
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
}

export default ExplorarBebidasIngredientes;
