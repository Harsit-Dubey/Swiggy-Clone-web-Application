

export default function RestCard({ restInfo }) {

  return (
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo?.info?.cloudinaryImageId} />
  )

}