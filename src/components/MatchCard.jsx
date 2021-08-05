import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './MatchCard.css'

const MatchCard = () => {
    const [cardMatch, setCardMatch] =useState([]);
    const { id } = useParams();
    const [messageClick, setMessageClick] = useState("")

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

    const handleClick = () => {
        setMessageClick(messageClick)
    }


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
            <Link to="/messages/:match" className="button">
            <button className="buttonCard" onClick={handleClick}>send a message</button>
            </Link>
            </div>
        </div>
    );
}
 
export default MatchCard;