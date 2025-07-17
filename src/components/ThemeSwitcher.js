import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle('dark-theme', !isDarkTheme);
    };

    return (
        <div className="theme-switcher" onClick={toggleTheme}>
            {isDarkTheme ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </div>
    );
};

export default ThemeSwitcher;