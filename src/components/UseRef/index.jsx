import React from "react";

const UseRef = () => {
  const [data, setData] = React.useState(1);
  const inputRef = React.useRef(null);
  const numberRef = React.useRef(0);

  return (
    <>
      <strong>Sample useRef</strong>
      {numberRef.current}
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          inputRef.current.focus();
          numberRef.current = 1;
          setData(2);
        }}
      >
        click to focus
      </button>
    </>
  );
};

export default UseRef;
