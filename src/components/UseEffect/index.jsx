import React from "react";

const UseLayoutEffect = () => {
  const [number, setNumber] = React.useState(0);

  React.useEffect(() => {
    // componentDidMount
    console.log("rendered....");
  }, []);

  React.useEffect(() => {
    console.log("number changed...", number);
  }, [number]);

  return (
    <>
      <strong>Sample useEffect</strong>
      please check console
      <br />
      Number: {number}
      <button onClick={() => setNumber(number + 1)}>number + 1</button>
    </>
  );
};

export default UseLayoutEffect;
