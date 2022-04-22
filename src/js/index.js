//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "../styles/App.css";

//import your own components
// import Home from "./component/home.jsx";
import App from "./App";

//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<App />, document.querySelector("#app"));
