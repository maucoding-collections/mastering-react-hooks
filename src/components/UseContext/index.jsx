import React from "react";

const NumberContext = React.createContext();

const Children = () => {
  const value = React.useContext(NumberContext);
  return (
    <>
      {" "}
      <strong>{value}</strong>
    </>
  );
};

const UseContext = () => {
  return (
    <>
      <NumberContext.Provider value={6}>
        <strong>Sample useContext</strong>
        <br />
        <Children />
      </NumberContext.Provider>
    </>
  );
};

export default UseContext;
