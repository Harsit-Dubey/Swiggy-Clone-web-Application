import { imageGridCards } from "../utils/FoodData"
import FoodCard from "./FoodCard"

export default function FoodOption() {

  return (
    <>
      <p className="text-2xl  mt-20 w-[80%] container mx-auto font-bold ">Order our best food options</p>
      <div className="w-[80%] container mx-auto flex flex-wrap mt-5 gap-3  ">
        {
          imageGridCards.map((foodData) => <FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
        }
      </div>
    </>
  )
}