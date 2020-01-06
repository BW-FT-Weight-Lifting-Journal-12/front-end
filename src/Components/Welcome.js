import React from 'react';
import Navigation from './Navigation';
import Hero from '../images/WJ-Hero.png';

const Welcome = () => {


    return (
        <div>
        <Navigation />
        <img src={Hero} alt="hero"/>
        <h1>Welcome Page</h1>
        </div>
    )
}

export default Welcome; 
