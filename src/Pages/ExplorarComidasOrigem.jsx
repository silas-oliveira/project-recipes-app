import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';
import RenderRecipes from '../Components/RenderRecipes';
import RenderAreaOptions from '../Components/RenderAreaOptions';

function ExplorarComidasOrigem() {
  const { meals } = useContext(ContextAppReceita);

  return (
    <div>
      <Header title="Explorar Origem" search />
      <RenderAreaOptions />
      <RenderRecipes recipes={ meals } local="comidas" />
      <Footer />
    </div>
  );
}

export default ExplorarComidasOrigem;
