import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/img4.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out the story how, when, and why the team and app was made.' />

            <p>Curly Bracket is a team that consists of 5 members formed in University to develop
              a website. ArtBeat is a three-subject project for their Web Development, Advanced Database, and
              Mobile Development class. 
            </p>
            <p>The team wants to provide artists all around the world a platform 
              that revolves around their skills and passion for Art. Hence, ArtBeat was made.
            </p>
           
            <button className='btn2'>Learn More</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
