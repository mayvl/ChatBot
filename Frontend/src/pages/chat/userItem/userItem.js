import React from 'react';
import './userItem.css';
import UserAvatar from '../../../assets/images/UserItem.png'
import { Container, Avatar, Typography } from '@material-ui/core';

const UserItem = ({ text }) => {
    return (
        <Container className='userItem-container'>

            <Typography className='Typography'>{ text }</Typography>
            <Avatar src={UserAvatar} />
        </Container>

    )
}

export default UserItem;