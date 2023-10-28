import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadCard = (props) =>{
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(props.data);
    }, [props]);

    return (
        <div className="readCards">
            {
                posts && posts.length > 0 ?
                posts.map((post) => 
                <Card id={post.id} name={post.name} speed={post.speed} color={post.color}/>
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadCard;