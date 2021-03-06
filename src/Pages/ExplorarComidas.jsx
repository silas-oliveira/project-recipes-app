import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Link, useHistory } from 'react-router-dom';
import { getRandomMeal } from '../services/requestApi';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function ExplorarComidas() {
  const history = useHistory();

  function renderButtons() {
    return (
      <>
        <Link to="/explorar/comidas/ingredientes" className="col-12 col-md-7">
          <button
            data-testid="explore-by-ingredient"
            type="button"
            className="btn-all-width btn btn-primary my-3"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area" className="col-12 col-md-7">
          <button
            data-testid="explore-by-area"
            type="button"
            className="btn-all-width btn btn-primary"
          >
            Por Local de Origem
          </button>
        </Link>
        <div className="col-12 col-md-7">
          <button
            data-testid="explore-surprise"
            type="button"
            className="btn-all-width btn btn-primary my-3"
            onClick={ async () => {
              const id = await getRandomMeal();
              history.push(`/comidas/${id}`);
            } }
          >
            Me Surpreenda!
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Header title="Explorar Comidas" />
      <FadeIn>
        <div className="container my-3">
          <div className="row justify-content-center">
            {renderButtons()}
          </div>
        </div>
      </FadeIn>
      <Footer />
    </>
  );
}

export default ExplorarComidas;
