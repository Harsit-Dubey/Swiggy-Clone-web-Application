
export default function GroceryCard({ foodData }) {

  return (

    <a href={foodData?.action?.link}>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId} />
    </a>

  )
}