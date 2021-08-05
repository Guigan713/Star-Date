import { useState, useEffect } from 'react'
import axios from 'axios'

const MatchCard = (props) => {
    const [cardMatch, setCardMatch] =useState();
    const matchId = props.match.params.id

    useEffect(() => {
        axios.get(`https://miadil.github.io/starwars-api/api/${matchId}`)
        .then((res => {
            setCardMatch(res.data.id)
        }))
    }, [matchId])

    return (
        <div className="cardContainer">
            <img src={cardMatch} alt={`img of ${matchId}`} />
            <h1>{matchId.name}</h1>
        </div>
    );
}
 
export default MatchCard;