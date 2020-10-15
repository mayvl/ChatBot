import React from 'react';
import Lottie from 'react-lottie';
import dinoBot from './12331-dino.json';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
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

    return (
        <div onClick={handleOnclick} className='dinoContainer'>
            <Grid container>
                <Grid item md={12}>
                    <Lottie
                        options={defaultOptions}
                    />
                </Grid>
                <Grid item md={12}>
                    <label className='favoriteFont'>Hazme click para empezar a chatear :)</label>

                </Grid>


            </Grid>

        </div>
    )
}

export default Dino;