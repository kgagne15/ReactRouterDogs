import React from "react";
import {Link} from "react-router-dom";

const DogList = ({dogs}) => {
    return (
        
        <>
        <h1>DOG LIST</h1>
        {dogs.map(dog => {
            return (
            <>
                <h2><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></h2>
                <img src={dog.src} />
            </>
            )
            
        })}
        </>
    )
}

export default DogList;