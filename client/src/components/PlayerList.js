import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

import PlayerCard from './PlayerCard';

function PlayerList(props) {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    return(
        <>
        <button onClick={() => toggleTheme()}>Toggle Dark Theme</button>
        <h1>Player List</h1>
        {props.players.map((element) => <PlayerCard player={element}/>)}
        </>
    );
}

export default PlayerList;