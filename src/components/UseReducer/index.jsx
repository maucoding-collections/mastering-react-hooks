import React from "react";

const initialState = 0;

const diceReducer = (state, action) => {
  switch (action.type) {
    case "random":
      return Math.round(Math.random() * 5 + 1);
    default:
      return initialState;
  }
};

const UseReducer = () => {
  // init reducer
  const [state, dispatch] = React.useReducer(diceReducer, initialState);

  return (
    <>
      <strong>sample useReducer</strong>
      <br />
      Current number : {state}
      <br />
      <button
        onClick={() => {
          dispatch({ type: "random" });
        }}
      >
        Random
      </button>
    </>
  );
};

export default UseReducer;
