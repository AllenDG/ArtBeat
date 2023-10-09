import React from "react"
import { gallery } from "../../data/Data"
import './gallery.css'



const PriceCard = () => {

  const imageViews = gallery.map((gallery) => (
    <div key={gallery.id}>
      <p>{gallery.description}</p>
      <img src={gallery.image} alt={gallery.description}/>
    </div>
  ))
  return (
    <>
      <div className="gallery-container">
      {imageViews}
      </div>
    </>
  )
}

export default PriceCard
