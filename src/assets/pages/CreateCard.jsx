import React, { useState } from 'react';
import { supabase } from '../../client.jsx';

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

        window.location = "/";

    }
    return(
        <div>
            <form>
                <label >Name</label> <br />
                <input type="text" id="name" name="name" value ={card.name} onChange={handleChange}/><br />
                <br/>

                <label >Speed</label><br />
                <input type="text" id="speed" name="speed" value ={card.speed} onChange={handleChange}/><br />
                <br/>

                <label >Color</label><br />
                <select id="color" name="color" value={card.color} onChange={handleChange}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select><br/>
                
                <input type="submit" value="Create Crewmate" onClick={createCrewmate} />
            </form>
        </div>
    )
}

export default CreateCard