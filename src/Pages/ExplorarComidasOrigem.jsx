import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';
import RenderRecipes from '../Components/RenderRecipes';
import RenderAreaOptions from '../Components/RenderAreaOptions';

function ExplorarComidasOrigem() {
  const { meals } = useContext(ContextAppReceita);

  return (
    <>
      <Header title="Explorar Origem" search />
      <div className="container">
        <RenderAreaOptions />
        <RenderRecipes recipes={ meals } local="comidas" />
      </div>
      <Footer />
    </>
  );
}

export default ExplorarComidasOrigem;
