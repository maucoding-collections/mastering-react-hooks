import React from "react";

const UseDeferredValue = () => {
  const [response, setResponse] = React.useState({});
  const deferredValue = React.useDeferredValue(response);

  React.useEffect(() => {
    setResponse({ data: "this my data" });
  }, []);

  return (
    <>
      <strong>Sample useDeferredValue</strong>
      <br />
      {deferredValue || "loading..."}
    </>
  );
};

export default UseDeferredValue;
