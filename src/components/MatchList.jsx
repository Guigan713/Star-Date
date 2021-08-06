import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'



const MatchList = () => {
    const [listMatch, setListMatch] =useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getMatchList = () => {

            axios.get(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                setListMatch(data);
            })
        }
        getMatchList()
    }, [id])

    return (
        <div className="matchListContainer">
           
        </div>
    );
}

export default MatchList;
