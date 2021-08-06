import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import Message from './message.svg'

import './MessageList.css'

const MessageList = () => {

    const myMatches = "[" + localStorage.getItem('matchIdList') + "]"
    // console.log("myMatches", myMatches)
    const [messageList, setMessageList] =useState([]);

    useEffect(() => {
        const getMessageList = () => {
            axios.get(`https://miadil.github.io/starwars-api/api/all.json`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                setMessageList(data);
            })
        }
        getMessageList()
    }, [])

    return (
        <div className ="messageListContainer">
        {messageList &&
            messageList
            .filter( (match, index) => myMatches.includes(match.id))
            .map( (match, index) =>
                <div className="messageBox" key={index}>
                    <div className = "messageListImg">
                        <img src={match.image} alt={match.name}/>
                    </div>
                    <div className = "messageListName">{match.name}</div>
                    <Link to="/messages/:match">
                    <img src={Message} alt="message box"></img>
                    </Link>
                </div>
                )
            }
            </div>
    );
}

export default MessageList;