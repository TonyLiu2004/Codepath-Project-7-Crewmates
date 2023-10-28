import React, {useState, useEffect} from 'react';
import { supabase } from '../../client.jsx';
import { useParams } from 'react-router-dom';

const EditCard = ({data}) => {
        const {id} = useParams();
    const [card, setCard] = useState({id: null, name: "", speed: "", color: ""});

    useEffect(() => {
        const result = data.filter(item => String(item.id) === id)[0];
        setCard({name: result.name, speed: result.speed, color: result.color});
    }, [data, id]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCard( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateCard = async (event) => {
        event.preventDefault();
        const { error } = await supabase
        .from('crewmates')
        .update({ name: card.name, speed: card.speed,  color: card.color})
        .eq('id', id)

        if (error) {
            console.log(error);
        }

        window.location = "/";
    }

    const deleteCrewmate = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('crewmates')
        .delete()
        .eq('id', id); 
    
        window.location = "http://localhost:5173/";
    }

    return(
        <div>
            <form>
                <label>Name</label> <br />
                <input type="text" id="name" name="name" value={card.name} onChange={handleChange}/><br />
                <br/>

                <label>Speed</label><br />
                <input type="number" id="speed" name="speed" value={card.speed} onChange={handleChange}/><br />
                <br/>

                <label>Color</label><br />
                <select id="color" name="color" value={card.color} onChange={handleChange}>
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
                
                <input style = {{fontSize:"15px", backgroundColor:"grey", padding:"10px", borderRadius:"10px"}} type="submit" value="Update Crewmate" onClick={updateCard}/>
                <button className="deleteButton" onClick={deleteCrewmate}>Delete Crewmate</button>
            </form>
        </div>
    )
}

export default EditCard;