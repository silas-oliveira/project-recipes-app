import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getRandomCockTails } from '../services/requestApi';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function ExplorarBebidas() {
  const history = useHistory();
  return (
    <>
      <Header title="Explorar Bebidas" />
      <div className="container my-3">
        <div className="row justify-content-center">
          <Link to="/explorar/bebidas/ingredientes" className="col-12 col-md-7">
            <button
              data-testid="explore-by-ingredient"
              type="button"
              className="btn-all-width btn btn-primary my-3"
            >
              Por Ingredientes
            </button>
          </Link>
          <div className="col-12 col-md-7">
            <button
              data-testid="explore-surprise"
              className="btn-all-width btn btn-primary"
              type="button"
              onClick={ async () => {
                const id = await getRandomCockTails();
                history.push(`/bebidas/${id}`);
              } }
            >
              Me Surpreenda!
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExplorarBebidas;
