import React from 'react';
import PropType from 'prop-types';
import ContextAppReceita from './ContextAppReceita';

function ProvideAppReceita({ children }) {
  const context = {};
  return (
    <ContextAppReceita.Provider value={ context }>
      {children}
    </ContextAppReceita.Provider>
  );
}

ProvideAppReceita.propTypes = {
  children: PropType.node.isRequired,
};

export default ProvideAppReceita;
