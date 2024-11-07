import React from 'react';
import Champion from '../components/Champion';
import { useParams } from 'react-router-dom';

const ChampInfoScreen = () =>{
    const {championName} = useParams(); //Grab the champion name from the search
    console.log(championName)
    return(
        <div>
            {/*Render out champion component based on the championName*/}
            {championName && <Champion name = {championName}/>} 
        </div>
    );
}

export default ChampInfoScreen;