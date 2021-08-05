import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

import MessageCard from './components/MessageCard'

const MessageList = () => {
    const [listMsg, setListMsg] =useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getMessageList = () => {

            axios.get(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                setListMsg(data);
            })
        }
        getMessageList()
    }, [id])

    return (
        <div className="matchListContainer">
            <MessageCard name={listMsg}/>
        </div>
    );
}

export default MessageList;
