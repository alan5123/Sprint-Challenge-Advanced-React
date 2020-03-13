import React from 'react';

function PlayerCard(props) {
    console.log(props.player);
    return(
        <div className='player-card'>
            <h2>{props.player.name}</h2>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
          
        </div>
    );
}

export default PlayerCard;