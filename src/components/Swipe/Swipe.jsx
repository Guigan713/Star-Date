import { React, useState, useEffect } from "react";
import axios from 'axios';

import Cross from './times-solid.svg'
import Heart from './heartbeat-solid.svg'

import './Swipe.css';

const Swipe = () => {

    // Initial State
    const [charList, setCharList] = useState([]);
    const [randomId, setRandomId] = useState("");
    const [matchIdList, setMatchIdList] = useState([]);

    useEffect(() => {
        // Get character list from API
        const getCharList = () => {
            axios
                .get(`https://miadil.github.io/starwars-api/api/all.json`)
                .then(response => response.data)
                .then(data => {
                    // console.log('My Dates', data);
                    setCharList(data);
                })
            }
        getCharList()
    }, [randomId])

    // Get a random number between 1 and 87
    const getANumber = () => {
        let randomInt = Math.floor(Math.random() * 87) + 1;
            randomInt === 17 ? randomInt = Math.floor(Math.random() * 87) + 1 : setRandomId(randomInt); // Id 17 does not exist
        setRandomId(randomInt)
    }

    // Response for Left click
    const handleLeftClick = () => {
        getANumber()
    }
    
    // Response for Right click
    const handleRightClick = (e,id) => {
        setMatchIdList([...matchIdList,id]) // add id to matchIdList
        getANumber()
    }

    return (
        <div className ="swipe">
            {/* {matchIdList.length > 0 && console.log("MyMatchList", matchIdList)} */}
            {/* {console.log("My matches", localStorage.getItem('matchIdList'))} */}

            {// Save matchIdList in localStorage (be careful if you change PC)
            localStorage.setItem('matchIdList', matchIdList)}
            {/* <h1>Swipe</h1> */}
            {charList &&
                charList
                .filter( (char, index) => char.id === randomId)
                .map( (char, index) =>
                    <div className="swipeBox" key={index}>
                        <div className = "characterImg">
                            <img src={char.image} alt={char.name}/>
                        </div>
                        <div className = "characterName">{char.id}{char.name}</div>
                        <div className="swipeBtn">
                            <button onClick={handleLeftClick}><img src={Cross} alt="croix"></img></button>
                            <button onClick={(e)=>handleRightClick(e,char.id)}><img src={Heart} alt="coeur"></img></button>
                        </div>
                        <div className = "characterName">{char.name}</div>
                    </div>
                    )
                }
            <button className="startBtn" onClick={handleLeftClick}>Start</button>
        </div>
    );
}


export default Swipe;
