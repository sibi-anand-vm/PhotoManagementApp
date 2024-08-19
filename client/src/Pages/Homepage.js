import React  from "react";
import '../styles/homepage.css'
import Navbar from "../components/navbar";
const Homepage=()=>{
return(
    <>
        <Navbar />
  <div className="hero">
    <div className="hero-text">
      <h2>Welcome to Image Gallery Hub</h2>
      <p>Your Ultimate Image Showcase Platform</p>
    </div>
  </div>
    </>
)
}
export default Homepage; 