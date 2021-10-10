import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";

const App = () => {
	return <Main />;
};

// console.log('Hello Webpack!');

ReactDOM.render(<App />, document.getElementById("app"));
