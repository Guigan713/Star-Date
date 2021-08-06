import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const MessageCard = () => {
    const [cardMessage, setCardMessage] =useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getMessageCard = () => {

            axios.get(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                setCardMessage(data);
            })
        }
        getMessageCard()
    }, [id])

    return (
        <div className="matchListContainer">
             
        </div>
    );
}

export default MessageCard;