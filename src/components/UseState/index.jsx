import React from "react";

const UseState = () => {
  const [response, setResponse] = React.useState({});

  React.useEffect(() => {
    setResponse({ data: "this my data" });
  }, []);

  return (
    <>
      <strong>Sample useState</strong>
      <br />
      {response.data || "loading..."}
    </>
  );
};

export default UseState;
