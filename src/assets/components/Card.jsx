import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import pic1 from './crewmatePic.png'
import red from './red.png'
import blue from './blue.png'
import green from './green.png'
import pink from './pink.png'
import orange from './orange.png'
import yellow from './yellow.png'
import black from './black.png'
import white from './white.png'
import purple from './purple.png'
import brown from './brown.png'

const Card = (props) => {
    const [pic,setPic] = useState(pic1);
    useEffect(() => {
        const getColor = () => {
            if(props.color == "Red") setPic(red);   
            if(props.color == "Blue") setPic(blue);
            if(props.color == "Green") setPic(green);
            if(props.color == "Pink") setPic(pink);
            if(props.color == "Orange") setPic(orange);
            if(props.color == "Yellow") setPic(yellow);
            if(props.color == "Black") setPic(black);
            if(props.color == "White") setPic(white);
            if(props.color == "Purple") setPic(purple);
            if(props.color == "Brown") setPic(brown);
        }
        getColor() 
      }, []);
    return (
        <div className="Card">
            <Link
                to={`/info/${props.id}`}
                key={props.id}
                state={{ pic }}
                >
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
            <Link className = "link" to={`/edit/${props.id}`}>Edit Crewmate</Link>
            </Link>
        </div>
    );
};

export default Card;