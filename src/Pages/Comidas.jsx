import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';
import RenderCategories from '../Components/RenderCategories';
import RenderRecipes from '../Components/RenderRecipes';

function Comidas() {
  const { meals } = useContext(ContextAppReceita);

  return (
    <>
      <Header title="Comidas" search />
      <div className="container">
        <RenderCategories local="comidas" />
        <RenderRecipes recipes={ meals } local="comidas" />
      </div>
      <Footer />
    </>

  );
}

export default Comidas;
