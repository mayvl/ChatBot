import React from 'react';
import './inputChat.css';
import { Container, TextField, Button, Icon } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const InputChat = ({ sendMessage, getMeMessage, message, chat }) => {
    return (


        <Container className='inputText-container' >
            <TextField
                disable={chat.length >= 3 ? true : false}
                id="outlined-basic"
                className='TextField'
                variant="outlined"
                value={message.message}
                onChange={(e) => getMeMessage(e.target.value)} />
            <Button className="inputButton" type="submit" onClick={(e) => sendMessage(e)}>
                <SendIcon />
            </Button>
        </Container>
    )
}

export default InputChat;