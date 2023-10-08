import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='  Where Art and Music Converge Your Canvas of Experiences Begins. ' subtitle='ArtBeat is the ultimate fusion of art and music, bringing enthusiasts together for unforgettable experiences. Discover upcoming events, schedule appointments with your favorite artists, and secure your tickets with ease.' />

          <form className='flex'>
            <div className='box'>
              <span>Searh Event</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Place</span>
              <input type='text' placeholder='Place' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
           
           
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
