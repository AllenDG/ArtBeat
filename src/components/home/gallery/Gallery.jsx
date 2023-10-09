import React from "react"
import Heading from "../../common/Heading"
import "./gallery.css"
import PriceCard from "./PriceCard"

const Gallery = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Gallery'/>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Gallery
