import React, { Component} from 'react';
import {Container} from '@material-ui/core';
import Dino from './components/dino/dino';

export default class Home extends Component{
    render(){
        return(
            <Container md={12} className='home-container'>
                <Dino />
            </Container>
        )
    }
}