import { React, useState, useEffect } from 'react'
import axios from 'axios'

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
        <div className ="swipe">
        {matchList &&
            matchList
            .filter( (match, index) => myMatches.includes(match.id))
            .map( (match, index) =>
                <div className="swipeBox" key={index}>
                    <div className = "matchListImg">
                        <img src={match.image} alt={match.name}/>
                    </div>
                    <div className = "matchListName">{match.name}</div>
                </div>
                )
            }
            </div>
    );
}

export default MatchList;
