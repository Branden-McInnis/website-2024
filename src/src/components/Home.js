
import './home.css'
import React from 'react';
import Typed from './Typed';
import Abouts from './short-about-me';
const Home = () => {
    return(
        <div className='app'>
        <Typed />
        <Abouts />
        </div>
    );
}

export default Home 