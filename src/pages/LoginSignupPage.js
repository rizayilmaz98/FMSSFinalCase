import React from 'react'
import LoginSignup from "../components/Auth/LoginSignup";
import bgVideo from '../assets/bgVideo.mp4'
function LoginSignupPage() {
  return (
    <>
        <video autoPlay muted loop>
          <source src={bgVideo} type="video/mp4"/>
        </video>
        <LoginSignup/>
    </>
  )
}

export default LoginSignupPage