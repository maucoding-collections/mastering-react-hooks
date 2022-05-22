import React from "react";

const UseMemo = () => {
  const [response, setResponse] = React.useState({});

  React.useEffect(() => {
    setResponse({ data: "this my data" });
  }, []);

  const updateAt = React.useMemo(() => {
    return new Date().toDateString();
  }, [response]);

  return (
    <>
      <strong>Sample useMemo</strong>
      <br />
      {response.data || "loading..."}
      <br />
      Updated at: {updateAt}
    </>
  );
};

export default UseMemo;
