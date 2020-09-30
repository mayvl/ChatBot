import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './select.css';

const Select = ({ options, handleSelectOptions }) => {
    return (
        <Container className='selector-container'>
            <Container className='selector-content'>
                {options.map(op =>
                    <Container key={op.id}
                        className='selector-options'
                        onClick={(e) => handleSelectOptions(op.id)}>

                        <Typography className='Typography'>{op.text}</Typography>

                    </Container>
                )}
            </Container>
        </Container>
    )

}

export default Select;