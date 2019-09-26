import React from "react"
import Travel from "./Travel"

const travelsGreatLakes = [
    {
        "lakeName": "Lake Geneva",
        "country": "Switzerland"
    },
    {
        "lakeName": "Lake Placid",
        "country": "United States"
    },
    {
        "lakeName": "Lake Kivu",
        "country": "Rwanda"
    },
    {
        "lakeName": "Lake Victoria",
        "country": "Ouganda"
    },
    {
        "lakeName": "Lake Michigan",
        "country": "United States"
    }
]

const TravelsGreatLakes = () => (
    <div>
        {travelsGreatLakes.map((lakes, i) => (
            <Travel destination={lakes.lakeName} country={lakes.country} key={i} />
        ))}
    </div>
);

export default TravelsGreatLakes;