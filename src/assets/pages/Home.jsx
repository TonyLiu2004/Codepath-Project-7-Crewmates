import React from "react";
import pic1 from "../images/amongus1.jpg"
import "./Home.css"
const Home = () => {
    return (
        <div className = "home-container">
            <h1>AMONGUS Crewmate Creator!</h1>

            <h4>Create a AMONGUS crew before sending them into space!</h4>
            <img src={pic1}></img>
        </div>
    )
}

export default Home;