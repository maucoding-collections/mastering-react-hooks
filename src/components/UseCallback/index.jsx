import React from "react";

const UseCallback = () => {
  const [response, setResponse] = React.useState({});

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = React.useCallback(() => {
    setResponse({ data: "this is data" });
  }, [response]);

  return (
    <>
      <strong>Sample useCallback</strong>
      <br />
      response {response.data || "loading"}
    </>
  );
};

export default UseCallback;
