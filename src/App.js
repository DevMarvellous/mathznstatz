import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher';
import Home from './pages/Home';
import './styles/theme.css';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
            <ThemeSwitcher toggleTheme={toggleTheme} />
            <Navbar />
            <Home />
        </div>
    );
}

export default App;