import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Explorar() {
  return (
    <>
      <Header title="Explorar" />
      <section className="container my-3">
        <div className="row justify-content-center">
          <Link to="/explorar/comidas" className="col-12 col-md-7">
            <button
              id="explorer"
              type="button"
              data-testid="explore-food"
              className="btn-all-width btn btn-primary my-3"
            >
              Explorar Comidas
            </button>
          </Link>
          <Link to="/explorar/bebidas" className="col-12 col-md-7">
            <button
              id="explorer"
              type="button"
              data-testid="explore-drinks"
              className="btn-all-width btn btn-primary"
            >
              Explorar Bebidas
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Explorar;
