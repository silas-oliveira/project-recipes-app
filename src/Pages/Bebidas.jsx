import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';
import RenderCategories from '../Components/RenderCategories';
import RenderRecipes from '../Components/RenderRecipes';

function Bebidas() {
  const { drinks } = useContext(ContextAppReceita);

  return (
    <>
      <Header title="Bebidas" search />
      <RenderCategories local="bebidas" />
      <h1>Bebidas</h1>
      <RenderRecipes recipes={ drinks } local="bebidas" />
      <Footer />
    </>
  );
}

export default Bebidas;
