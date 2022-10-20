import React from "react";
import {useParams} from "react-router-dom";


const Dog = ({dogs}) => {
    const {name} = useParams();
    let dog; 
    for (let d of dogs) {
        if (d.name === name) {
            dog = d;
        }
    }
    if (!dog) {
        return <h1>This dog does not exist</h1>
    }
    return (
    <>
    <h1>{name}</h1>
    <p>Age: {dog.age}</p>
    <img src={dog.src}/>
    {dog.facts.map(fac => {
        return (
            <p>{fac}</p>
        )
    })}
    </>
    )
}

export default Dog;