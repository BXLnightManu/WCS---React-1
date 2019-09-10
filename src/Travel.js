import React from "react"

const Travel = props => (
    <div>
        <h1>{props.destination}</h1>
        <h2>{props.country}</h2>
        <img
            src={props.image}
            alt={props.destination}
        />
        <h3>{props.distance}</h3>
    </div>
);

export default Travel;