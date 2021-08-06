import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import './MatchCard.css'

const MatchCard = () => {
    const { id } = useParams();
    const [cardMatch, setCardMatch] = useState([]);
    console.log(id)

    useEffect(() => {
        const getMatchCard = () => {
            axios
                .get(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
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
            <div className="card">
            <h1>{cardMatch.name}</h1>
            <p className="cardInfos">gender: {cardMatch.gender}</p>
            <p className="cardInfos">mass: {cardMatch.mass}</p>
            <p className="cardInfos">homeworld: {cardMatch.homeworld}</p>
            <p className="cardInfos">species: {cardMatch.species}</p>
            <p className="cardInfos">eye color: {cardMatch.eyeColor}</p>
            <p className="cardInfos">skin color: {cardMatch.skinColor}</p>
            <Link to={`/messages/${cardMatch.id}`} className="button">
                <button className="buttonCard">send a message</button>
            </Link>
            </div>
        </div>
    );
}

export default MatchCard;
