import React, { useState } from 'react';
import { supabase } from '../../client.jsx';
import "./CreateCard.css";
import pic from "../images/amongus2.png";
const CreateCard = () => {
    const [card, setCard] = useState({name: "", speed: 0, color: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCard( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCrewmate = async (event) => {
        event.preventDefault();

       const { error } = await supabase
        .from('crewmates')
        .insert({name: card.name, speed: card.speed, color: card.color})
        .select()

        if (error) {
            console.log(error);
        }

        window.location = "/create";

    }
    return(
        <div>
            <h1>Create a New Crewmate</h1>
            <img className = "pic2" src={pic}></img>
            <form>
                <label >Name</label> <br />
                <input type="text" id="name" name="name" value ={card.name} onChange={handleChange}/><br />
                <br/>

                <label >Speed</label><br />
                <input type="number" id="speed" name="speed" value ={card.speed} onChange={handleChange}/><br />
                <br/>

                <label >Color &nbsp;</label>
                <select className= "color-selection" id="color" name="color" value={card.color} onChange={handleChange}>
                    <option value = "Red">Red</option>
                    <option value = "Blue">Blue</option>
                    <option value = "Green">Green</option>
                    <option value = "Pink">Pink</option>
                    <option value = "Orange">Orange</option>
                    <option value = "Yellow">Yellow</option>
                    <option value = "Black">Black</option>
                    <option value = "White">White</option>
                    <option value = "Purple">Purple</option>
                    <option value = "Brown">Brown</option>
                </select><br/><br/>

                <input style = {{fontSize: "15px" }} type="submit" value="Create Crewmate" onClick={createCrewmate} />
            </form>
        </div>
    )
}

export default CreateCard