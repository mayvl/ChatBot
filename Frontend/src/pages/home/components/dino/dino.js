import React from 'react';
import Lottie from 'react-lottie';
import dinoBot from './12331-dino.json';
import { useHistory } from 'react-router-dom';
import './dino.css';


const Dino = () => {

    let history = useHistory();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: dinoBot
    }

    function handleOnclick() {
        history.push('/chat')
    }

    return(
        <div onClick={handleOnclick} className='dinoContainer'>
            <Lottie
            options={defaultOptions}
            />
            <label className='favoriteFont'>Hazme click para empezar a chatear :)</label>
        </div>
    )
}

export default Dino;