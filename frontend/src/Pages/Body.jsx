import React from 'react'
import VideoPlayer from "../Pages/VideoPlayer";
import { Features } from '../Components/Features';
import Chatbot from '../Components/Chatbot';
const Body = () => {
  return (
    <div>
      <VideoPlayer></VideoPlayer>
      <Features />
      <Chatbot />
    </div>
  )
}

export default Body
