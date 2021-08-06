import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const MatchList = () => {

    const myMatches = "[" + localStorage.getItem('matchIdList') + "]"
    console.log(myMatches)

    const [listMatch, setListMatch] =useState([]);
    useEffect(() => {
        const getMatchList = () => {

            axios.get(`https://miadil.github.io/starwars-api/api/all.json`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                setListMatch(data);
            })
        }
        getMatchList()
    }, [])

    return (
        <div className="matchListContainer">
           <h2>Coucou</h2>
        </div>
    );
}

export default MatchList;
