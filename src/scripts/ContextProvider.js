import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';
export const Context = createContext();

function ContextProvider({ children }) {

  const [hello, setHello] = useState('');

  useEffect(() => {
    setHello('Hello World!')

  }, [])
  const value = {
    hello
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
