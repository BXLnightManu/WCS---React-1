import React from "react"

const travelsGreatLakes = [
    {
        "lakeName": "Lake Geneva",
        "Country": "Switzerland"
    },
    {
        "lakeName": "Lake Placid",
        "Country": "United States"
    },
    {
        "lakeName": "Lake Kivu",
        "Country": "Rwanda"
    },
    {
        "lakeName": "Lake Victoria",
        "Country": "Ouganda"
    },
    {
        "lakeName": "Lake Michigan",
        "Country": "United States"
    }
]

const TravelsGreatLakes = () => (
    <div>
        {travelsGreatLakes.map(lakes => (
            <p>{lakes.lakeName}</p>
        ))}
    </div>
);

export default TravelsGreatLakes;