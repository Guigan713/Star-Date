import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import Message from '../../assets/message.svg'

import './MatchList.css'

const MatchList = () => {

    const myMatches = "[" + localStorage.getItem('matchIdList') + "]"
    // console.log("myMatches", myMatches)
    const [matchList, setMatchList] =useState([]);

    useEffect(() => {
        const getMatchList = () => {
            axios.get(`https://miadil.github.io/starwars-api/api/all.json`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                setMatchList(data);
            })
        }
        getMatchList()
    }, [])

    return (
        <div className ="matchListContainer">
        {matchList &&
            matchList
            .filter( (match, index) => myMatches.includes(match.id))
            .map( (match, index) =>
                <div className="matchBox" key={index}>
                    <div className = "matchListImg">
                        <img src={match.image} alt={match.name}/>
                    </div>
                    <div className = "matchListName">{match.name}</div>
                    <Link to="/messages/:match">
                    <img src={Message} alt="message box"></img>
                    </Link>
                </div>
                )
            }
            </div>
    );
}

export default MatchList;
