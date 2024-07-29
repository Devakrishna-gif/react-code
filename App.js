import React from "react";
import ReactDOM from "react-dom/client";

let money = 20000;
let name = "Devakrishna";

let JsxHeading =  (
  <>
  <p>{name}</p>
  <h1 id="heading">This is React Element using JSX</h1>
</>
);

let FunctionalHeading = ()=>{
  return (
    <>
    <p>{money}</p>
    {JsxHeading}
    <h1>Functional Component using React</h1>
    </>
  )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalHeading/>);
