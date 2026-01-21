import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";
import GroceryOption from "./Components/GroceryOption";
import DineOtion from "./Components/DineOption";
import Restaurant from "./Components/Restaurant";

//Header section: Let's build it

function App() {

  return (
    <>
      <Header></Header>
      <FoodOption></FoodOption>
      <GroceryOption></GroceryOption>
      <DineOtion></DineOtion>
      <Restaurant></Restaurant>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)