import React from "react";
import ReactDOM from "react-dom";

// components
import UseStateSample from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseCallback from "./components/UseCallback";
import UseRef from "./components/UseRef";
import UseContext from "./components/UseContext";
import UseImperativeHandle from "./components/UseImperativeHandle";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseDeferredValue from "./components/UseDeferredValue";
import UseTransition from "./components/UseTransition";
import UseId from "./components/UseId";
import UseMemo from "./components/UseMemo";

const App = () => {
  return (
    <>
      <h1>Mastering React Hooks</h1>
      <small>youtube.com/maucoding</small>

      <div className="mb-5 mt-5">
        {/* <UseId />
        <hr /> */}
        {/* <UseTransition />
        <hr /> */}
        {/* <UseDeferredValue />
        <hr /> */}
        <UseLayoutEffect />
        <hr />
        <UseImperativeHandle />
        <hr />
        <UseRef />
        <hr />
        <UseMemo />
        <hr />
        <UseCallback />
        <hr />
        <UseReducer />
        <hr />
        <UseContext />
        <hr />
        <UseEffect />
        <hr />
        <UseStateSample />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
