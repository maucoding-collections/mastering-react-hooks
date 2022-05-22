import React from "react";

const Input = (props, ref) => {
  const inputRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    show: () => {
      console.log("showing....");
    },
  }));

  return <input type="text" ref={inputRef} />;
};

const InputRef = React.forwardRef(Input);

const UseImperativeHandle = () => {
  const inputCompRef = React.useRef();

  return (
    <>
      <strong>Sample useImperativeHandle</strong>
      <br />
      <InputRef ref={inputCompRef} />
      <button
        onClick={() => {
          inputCompRef.current.focus();
        }}
      >
        click to focus
      </button>
    </>
  );
};

export default UseImperativeHandle;
