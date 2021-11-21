import React, { useContext } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RenderIngredients from '../Components/RenderIngredients';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';

function ExplorarComidasIngredientes() {
  const { mealsIngredients } = useContext(ContextAppReceita);

  return (
    <>
      <Header title="Explorar Ingredientes" />
      <FadeIn>
        <div className="container">
          <RenderIngredients ingredients={ mealsIngredients } local="comidas" />
        </div>
      </FadeIn>
      <Footer />
    </>
  );
}

export default ExplorarComidasIngredientes;
