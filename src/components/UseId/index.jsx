import React from "react";

const UseId = () => {
  const Id = React.useId();

  return (
    <>
      <strong>Sample useId</strong>
      <br />
      Id: {id}
    </>
  );
};

export default UseId;
