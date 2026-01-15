import { GrocerGridCard } from "../utils/Grocery";
import GroceryCard from "./GroceryCard";


export default function GroceryOption() {

  return (

    <div>
      <h1>Shop groceries on Instamart</h1>
      <div>
        {
          GrocerGridCard.map((foodData) => <GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
        }
      </div>
    </div>
  )
}