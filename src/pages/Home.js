import React from 'react';
import Navbar from '../components/Navbar';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Animations from '../components/Animations';
import './theme.css';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <ThemeSwitcher />
            <Animations />
            <h1>Welcome to Mathz 'n' Statz</h1>
            <p>Your go-to platform for mathematical tools and statistics.</p>
            <div className="links">
                <a href="/tool1">Tool 1</a>
                <a href="/tool2">Tool 2</a>
                <a href="/tool3">Tool 3</a>
                <a href="/about">About Us</a>
            </div>
        </div>
    );
};

export default Home;