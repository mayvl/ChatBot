import React from 'react';
import './dinoItem.css';
import DinoAvatar from '../../../assets/images/Dino-mensajes.png';

const DinoItem = ({ text }) => {
    
    return (
        <div className='dinoItem-container'>
            <img src={DinoAvatar} />
            <div  className='dinoItem-message'>
                {text.map((text, index) =>

                    <label key={index} >{text}</label>
                )}
            </div>


        </div>
    )
}

export default DinoItem;