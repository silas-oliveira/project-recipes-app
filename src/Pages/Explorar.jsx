import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Explorar() {
  return (
    <>
      <Header title="Explorar" />
      <section>
        <Link to="/explorar/comidas">
          <button
            id="explorer"
            type="button"
            data-testid="explore-food"
          >
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            id="explorer"
            type="button"
            data-testid="explore-drinks"
          >
            Explorar Bebidas
          </button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Explorar;
