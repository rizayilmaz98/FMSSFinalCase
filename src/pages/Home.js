import React from 'react'
import SearchShip from '../components/SearchShip'
import Footer from '../components/Footer'
import ShowShip from '../components/ShowShip'
import bgVideo from '../assets/bgVideo.mp4'

function Home() {
  return (
    <>
        <video autoPlay muted loop>
          <source src={bgVideo} type="video/mp4"/>
        </video>
      <SearchShip/>
      <ShowShip/>
      <Footer/>
    </>
  )
}

export default Home