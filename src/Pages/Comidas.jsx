import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';
import RenderCategories from '../Components/RenderCategories';
import RenderRecipes from '../Components/RenderRecipes';

function Comidas() {
  const { meals } = useContext(ContextAppReceita);

  return (
    <div>
      <Header title="Comidas" search />
      <RenderCategories local="comidas" />
      <h1>Comidas</h1>
      <RenderRecipes recipes={ meals } local="comidas" />
      <Footer />
    </div>

  );
}

export default Comidas;
