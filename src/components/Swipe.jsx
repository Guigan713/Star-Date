import React from "react";
import { useState, useEffect } from "react";

import axios from 'axios';

import './Swipe.css';

const Swipe = () => {

    // Initial State
    const [charList, setCharList] = useState([]);
    const [randomId, setRandomId] = useState("");

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

    const handleClick = () => {
        let randomInt = Math.floor(Math.random() * 87) + 1;
        // console.log(randomInt)
        setRandomId(randomInt)
    }

    return (
        <div className ="swipe">
            <h1>Swipe</h1>
            <div className ="characterImg"></div>
            <div className = "characterName">
                {charList &&
                    charList
                    .filter( (char, index) => char.id == randomId)
                    .map( (char, index) => <div key={index}>{char.id}:{char.name}</div>)
                }
            </div>
            <div className="swipeBtn">
                <button>Left</button>
                <button>Right</button>
            </div>

            <button onClick={handleClick}>New character</button>

        </div>
    );
}

export default Swipe;