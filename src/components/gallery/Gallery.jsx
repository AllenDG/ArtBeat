import React from "react"
import Back from "../common/Back"
import PriceCard from "../home/gallery/PriceCard"
import img from "../images/pricing.jpg"
import "../home/gallery/gallery.css"


const Gallery = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='' title='Gallery' cover={img} />
        <div className='gallery container'>
          <PriceCard/>
        </div>
      </section>
    </>
  )
}

export default Gallery
