import React from 'react';
import { useHistory } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import { getUser, exitUser } from '../localStorage';
import userIcon from '../images/user.svg';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Perfil() {
  const { email } = getUser();
  const history = useHistory();

  function exit() {
    exitUser();
    history.push('/');
  }

  function renderButtons() {
    return (
      <div className="row mb-3">
        <div className="col-12 col-sm-6 pe-2 mb-3">
          <button
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => history.push('/receitas-feitas') }
            className="btn btn-primary btn-all-width"
          >
            Receitas Feitas
          </button>
        </div>
        <div className="col-12 col-sm-6 ps-2 mb-3">
          <button
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ () => history.push('/receitas-favoritas') }
            className="btn btn-primary btn-all-width"
          >
            Receitas Favoritas
          </button>
        </div>
        <div className="col-12 mt-1">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => exit() }
            className="btn btn-danger col-12 btn-all-width"
          >
            Sair
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header title="Perfil" />
      <div className="form-signin d-flex align-items-center custom-profile-height">
        <div className="border border-light rounded-3 shadow p-4 get-all-space">
          <div className="d-flex justify-content-center">
            <img
              src={ userIcon }
              alt="user"
              width="200"
              height="200"
              className="custom-border-profile"
            />
          </div>
          <InputGroup className="my-3">
            <InputGroup.Text>Email</InputGroup.Text>
            <p
              data-testid="profile-email"
              className="bg-white form-control text-center m-0"
            >
              { email }
            </p>
          </InputGroup>
          {renderButtons()}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Perfil;
