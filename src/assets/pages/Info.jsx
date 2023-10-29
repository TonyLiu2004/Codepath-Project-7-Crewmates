import React, {useState, useEffect} from 'react';
import { useParams, useLocation  } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Info = ({ data }) => {
    const {id} = useParams();
    const location = useLocation();
    const { pic } = location.state;
    const info = data.find(item => item.id.toString() === id);
    const [desc, setDesc] = useState("?");
    useEffect(() => {
        const setDescription  = () => {
            const speed = parseInt(info.speed, 10);
            if(speed < 0) setDesc(`Why is ${info.name} going backwards?`);
            else if(speed < 50) setDesc(`${info.name} is kind of slow...`);
            else if(speed < 100) setDesc(`${info.name} is decently fast.`);
            else if(speed < 200) setDesc(`${info.name} is pretty fast!`);
            else if(speed < 300) setDesc(`${info.name} is zooming!`);
            else setDesc(`${info.name} IS WAY TOO FAST!!!`)
        }
        setDescription ();
    },[]);

    return (
        <div>
            <h1>Crewmate: {info.name}</h1>
            <img style = {{width:"200px"}}src = {pic}></img>
            <h2 style = {{fontSize:"30px", marginBottom:"0px"}}>Stats</h2><br/>
            <h3 style = {{marginTop:"0px"}}>Speed: {info.speed}</h3>
            <h3>Color: {info.color}</h3>
            <h3>{desc}</h3>
            <Link className = "link" to={`/edit/${info.id}`}>Edit Crewmate</Link>
        </div>
    );
}
export default Info;