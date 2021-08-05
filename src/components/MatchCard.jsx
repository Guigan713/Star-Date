import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

import './MatchCard.css'

const MatchCard = () => {
    const [cardMatch, setCardMatch] =useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getMatchCard = () => {

            axios.get(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                setCardMatch(data);
            })
        }
        getMatchCard()
    }, [id])


    return (
        <div className="cardContainer">
            <img className="imageCard" src={cardMatch.image} alt={`img of ${id}`} />
            <h1>{cardMatch.name}</h1>
            <div>
            <p className="cardInfos">gender: {cardMatch.gender}</p>
            <p className="cardInfos">mass: {cardMatch.mass}</p>
            <p className="cardInfos">homeworld: {cardMatch.homeworld}</p>
            <p className="cardInfos">species: {cardMatch.species}</p>
            <p className="cardInfos">eye color: {cardMatch.eyeColor}</p>
            <p className="cardInfos">skin color: {cardMatch.skinColor}</p>
            <p className="cardInfos">affiliations: {cardMatch.affiliations}</p>
            </div>
        </div>
    );
}
 
export default MatchCard;