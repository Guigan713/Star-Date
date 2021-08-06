import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

import './MessageCard.css'

const MessageCard = () => {
    const [cardMessage, setCardMessage] =useState([]);
    const { match } = useParams();

    useEffect(() => {
        const getCardMessage = () => {
            axios
                .get(`https://miadil.github.io/starwars-api/api/id/${match}.json`)
                .then(response => response.data)
                .then(data => {
                    // console.log(data)
                    setCardMessage(data);
                })
        }
        getCardMessage()
    }, [match])

    return (
        <div className="messageContainer">
            <h2>Conversation privée avec...</h2>
            <div  className = "msgcontact">
                <div><img src={cardMessage.image} alt={cardMessage.name}/></div>
                <h2 className = "msgTitle">{cardMessage.name}</h2>
            </div>
            <div className = "newMsg">
                <div className = "msgRight">Hello ! Tu es de quelle planète ?</div>
                <div className = "msgLeft">Coruscant et toi ? Il paraît que tu gères niveau planètes depuis ta quête sur Unix !? </div>
            </div>
            <div className = "blabla">
                <input className = "chat" type="text" />
            </div>
        </div>
    );
}

export default MessageCard;
