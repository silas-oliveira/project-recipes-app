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
      <div className="container">
        <RenderCategories local="bebidas" />
        <RenderRecipes recipes={ drinks } local="bebidas" />
      </div>
      <Footer />
    </>
  );
}

export default Bebidas;
