import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import pic from './crewmatePic.png'

const Card = (props) => {

    return (
        <div className="Card">
            <div className = "container">
                <div>
                    <h3 className="name">Name: {props.name}</h3>
                    <h3 className="speed">Speed: {props.speed}</h3>
                    <h3 className="color">Color: {props.color}</h3>
                </div>
                <div>
                    <img className = "crewmatePic" src ={pic} alt="Crewmate"></img>
                </div>
            </div>
            <Link className = "link" to={'edit/'+ props.id}>Edit Crewmate</Link>
        </div>
    );
};

export default Card;