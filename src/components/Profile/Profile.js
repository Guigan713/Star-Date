import { useState, useEffect } from 'react';
import axios from 'axios';

import './Profile.css'

const Profile = () => {
    const [profile, setProfile] =useState([]);

    useEffect(() => {
        const getProfile = () => {
            axios
                .get(`https://miadil.github.io/starwars-api/api/id/88.json`)
                .then(response => response.data)
                .then(data => {
                    console.log(data)
                    setProfile(data);
                })
        }
        getProfile()
    }, [])

    return (
        <div className = "profile">
        {/* {console.log(profile)} */}
            <div className = "myDetails">
                <div className = "myAvatar">
                    <div><img src={profile.image} alt={profile.name}/></div>
                    <h1>{profile.name}</h1>
                    <p className="myStats">gender: {profile.gender}</p>
                    <p className="myStats">homeworld: {profile.homeworld}</p>
                    <p className="myStats">species: {profile.species}</p>
                    <p className="myStats">height: {profile.height}</p>
                    <p className="myStats">mass: {profile.mass}</p>
                    <p className="myStats">skin color: {profile.skinColor}</p>
                    <p className="myStats">hair color: {profile.hairColor}</p>
                    <p className="myStats">eye color: {profile.eyeColor}</p>
                </div>
                <div className = "myResearch">
                    <h1 >My research</h1>
                    <div className = "criteria">gender</div>
                    <div className = "criteria">height</div>
                    <div className = "criteria">mass</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
