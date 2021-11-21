import React, { useContext } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
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
      <FadeIn>
        <div className="container">
          <RenderAreaOptions />
          <RenderRecipes recipes={ meals } local="comidas" />
        </div>
      </FadeIn>
      <Footer />
    </>
  );
}

export default ExplorarComidasOrigem;
