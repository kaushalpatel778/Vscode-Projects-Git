import React from "react";
import ReactDom from "react-dom";
//import App from "./App";
//import ele from "./App";
import Student from "./Student";
//ReactDom.render(<App />, document.getElementById("root")); // Component Rendering use < />(self Closing angle bracket)
//ReactDom.render(ele, document.getElementById("root")); //Element Rendering
ReactDom.render(
  <Student name="Kp" rollno="900" />,
  document.getElementById("root")
);
