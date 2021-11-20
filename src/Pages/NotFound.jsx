import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

function NotFound() {
  return (
    <>
      <Header title="404" search={ false } />
      <div className="container">
        <div className="row justify-content-center">
          <div
            className={ `col-12 col-md-8 col-lg-6 d-flex 
          justify-content-center flex-column` }
          >
            <h1 className="text-center mt-3">Oops!</h1>
            <h1 className="h2 text-center my-2">404 Not Found</h1>
            <p className="my-3 text-center fs-5">
              Ocorreu um erro, pagina nao encontrada!
            </p>
            <Link to="/comidas" className="btn btn-primary btn-lg">
              Pagina Inicial
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
