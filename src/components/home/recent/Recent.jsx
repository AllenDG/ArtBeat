import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Events' subtitle='You make our events more wonderul, Join us!' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
