import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>
    <div className='home'>
        <div className='home-welcome'>Welcome to Book App</div>
        <button className='button-a'><Link to='/collections'>Start with collections</Link></button>
        <button className='button-b'><Link to='/books'>Start with books</Link></button>
    </div>
export default Home
