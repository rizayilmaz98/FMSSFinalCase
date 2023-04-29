import React from 'react'
import Forum from '../components/ForumComp/Forum'
import bgVideo from '../assets/bgVideo.mp4'
function ForumPage() {
  return (
    <>
        <video autoPlay muted loop>
          <source src={bgVideo} type="video/mp4"/>
        </video>
        <Forum/>
    </>
  )
}

export default ForumPage;