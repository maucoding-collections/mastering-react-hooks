import React from "react";

const UseState = () => {
  const [number, setNumber] = React.useState(0);

  React.useLayoutEffect(() => {
    // componentDidMount
    console.log("rendered....");
  }, []);

  React.useLayoutEffect(() => {
    console.log("number changed...", number);
  }, [number]);

  return (
    <>
      <strong>Sample useLayoutEffect</strong>
      please check console
      <br />
      Number: {number}
      <button onClick={() => setNumber(number + 1)}>number + 1</button>
    </>
  );
};

export default UseState;
