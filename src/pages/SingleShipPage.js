import React from 'react';
import SingleShip from '../components/SingleShip';
import Footer from '../components/Footer';
import bgVideo from '../assets/bgVideo.mp4';

function SingleShipPage() {
  return (
    <>
      <video autoPlay muted loop>
        <source src={bgVideo} type="video/mp4"/>
      </video>
      <SingleShip/>
      <Footer/>
    </>
  )
}

export default SingleShipPage