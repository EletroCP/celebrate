import React, { useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';
export const Context = createContext();

function ContextProvider({ children }) {

  const [hideBurger, setHideBurger] = useState(true);

  const value = {
    hideBurger,
    setHideBurger
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
