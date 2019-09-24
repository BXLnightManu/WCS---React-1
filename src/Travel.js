import React from "react"

const Travel = props => (
    <div>
        <h2>{props.destination}</h2>
        <h3>{props.country}</h3>
        <img
            src={props.image}
            alt={props.destination}
        />
        <p>{props.distance}</p>
    </div>
);

export default Travel;