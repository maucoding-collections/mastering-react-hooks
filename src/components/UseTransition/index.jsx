import React from "react";

const SampleUseTransition = () => {
  const [isPending, startTransition] = React.useTransition();
  const [count, setCount] = React.useState(0);

  function handleClick() {
    startTransition(() => {
      setCount((c) => c + 1);
    });
  }

  return (
    <>
      <p>Sample Use Transition</p>
      {isPending && <i>loading...</i>}
      <button onClick={handleClick}>click to increment: {count}</button>
    </>
  );
};

export default SampleUseTransition;
