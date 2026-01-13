import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";

//Header section: Let's build it

function App() {

  return (
    <>
      <Header></Header>
      <FoodOption></FoodOption>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)