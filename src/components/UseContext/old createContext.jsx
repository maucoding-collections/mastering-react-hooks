import React from "react";

const NumberContext = React.createContext();

const Children = () => {
  return (
    <NumberContext.Consumer>
      {(value) => <strong>{value}</strong>}
    </NumberContext.Consumer>
  );
};

const UseContext = () => {
  return (
    <>
      <NumberContext.Provider value={5}>
        <strong>Sample useContext</strong>
        <br />
        <Children />
      </NumberContext.Provider>
    </>
  );
};

export default UseContext;
