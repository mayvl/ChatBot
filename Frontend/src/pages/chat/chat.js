import React, { useEstate, useState, useEffect } from 'react';
import { Paper, Card, CardHeader, CardContent, Avatar, Typography, CardActions } from '@material-ui/core';
import './chat.css';
import DinoItem from './dinoItem/dinoItem';
import UserItem from './userItem/userItem';
import InputChat from './inputChat/inputChat';
import Select from './select/select';
import { doing, aboutMe } from '../../data/actions';



const Chat = () => {
    let idCounter = 0;

    const [message, setMessages] = useState({});



    const [chat, setChat] = useState([
        {
            id: 0,
            emitter: 'Dino',
            message: ['Hola!',
                'Cual es tu nombre?']
        },
    ]);

    const [openSelect, setOpenSelect] = useState(false);

    function firstResponse(name) {
        let newChat = {
            id: idCounter + 2,
            emitter: 'Dino',
            message: ['Mucho gusto ' + name + '!',
                'Mi nombre es Dino, soy un bot aun en desarrollo',
                'Eso quiere decir que aun no estoy preparado para preguntas especificas',
                'Lo que no significa que no podamos charlar',
                'Podes hacerme una pregunta de la lista y yo te respondo',
            ]
        }
        if (newChat) {
            setChat([...chat, newChat])
        }
    }

    function getMeMessage(value) {

        idCounter = idCounter + 1;
        setMessages({
            id: idCounter,
            emitter: 'User',
            message: value
        })
    }

    function sendMessage(e) {
        e.preventDefault();
        setChat([...chat, message])
    }



    useEffect(() => {
        if (chat.length === 2) {
            setTimeout(() => firstResponse(message.message), 500);
            setMessages({ ...message, message: ' ' });
            setTimeout(() => setOpenSelect(true), 600);
        }
    }, [chat])

    let options = [
        {
            id: 'What are you doing?',
            text: 'Que estas haciendo?'
        },
        {
            id: 'Send me a meme',
            text: 'Enviame un meme'
        },
        {
            id: 'Tell me about you',
            text: 'Contame algo sobre vos'
        }
    ]

    const [interactions, setInteractions] = useState([]);

    function handleSelectOptions(value) {
        debugger
        let result;

        switch (value) {
            case 'What are you doing?':
                result = doing[Math.floor(Math.random() * doing.length)]
                if (result) {
                    setInteractions([...interactions, result.message])
                }
                break;

            case 'Tell me about you':
                result = aboutMe[Math.floor(Math.random() * aboutMe.length)]
                if (result) {
                    setInteractions([...interactions, result.message])
                }
                break;
        }
    }

    return (
        <div className="chatbot-container">
            <div className="chatbot-content">

                <Paper elevation={3} className='chatbot-chat'>
                    <div className='chatItems'>
                        {chat.map((message, index) =>
                            message.emitter == 'Dino' ?
                                <DinoItem key={index} text={message.message} emitter={message.emitter} />
                                :
                                <UserItem key={index} text={message.message} emitter={message.emitter} />
                        )}
                        {openSelect &&
                            <Select
                                handleSelectOptions={handleSelectOptions}
                                options={options} />
                        }
                        {interactions.length > 0 && interactions.map((interaction, index) =>
                            <>

                                <DinoItem key={index} text={interaction}>

                                </DinoItem>

                                <Select
                                    key={index}
                                    handleSelectOptions={handleSelectOptions}
                                    options={options} />

                            </>
                        )}

                    </div>
                    <div className="chatInput">
                        <InputChat
                            chat={chat}
                            message={message}
                            getMeMessage={getMeMessage}
                            sendMessage={sendMessage} />
                    </div>
                </Paper>

            </div>
        </div>
    )
}



export default Chat;