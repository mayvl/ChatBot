import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, TextField, Grid, MenuItem, Container } from '@material-ui/core';
import Title from '../../components/title/title';

import '../../global.css';
import './signup.css';


export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <Container className='paperContent'>

                <Title />
                <Paper className='paper' variant="outlined" square elevation={3}>
                    <form>
                        <div>
                            <div className='buttonStyleGroup'>
                                <Link to='/login' className='buttonStyle'>
                                    Ya soy usuario
                                </Link>
                                <Link to='/signup' className='buttonStyle'>
                                    Crear cuenta
                                </Link>
                            </div>
                            <Grid container >
                                <Grid container>
                                    <Grid item xs={6} id='spaceField'>
                                        <TextField id="standard-required spaceField" label="Nombre Completo" defaultValue="" />
                                    </Grid>
                                    <Grid item xs={6} id='spaceField'>
                                        <TextField id="standard-required spaceField" label="Pais" defaultValue="" />
                                    </Grid>
                                    <Grid item xs={6} id='spaceField'>
                                        <TextField id="standard-required spaceField"
                                            label="Genero"
                                            defaultValue=""
                                            SelectProps={{
                                                multiple: true,
                                                value: []
                                            }}
                                        >
                                            <MenuItem>Fem</MenuItem>
                                            <MenuItem>Male</MenuItem>
                                        </TextField>

                                    </Grid>
                                    <Grid item xs={6} id='spaceField'>
                                        <TextField required id="standard-required spaceField" label="Nombre de usuario" defaultValue="" />
                                    </Grid>
                                    <Grid item xs={6} id='spaceField'>
                                        <TextField required id="standard-required spaceField" label="Contraseña" defaultValue="" />
                                    </Grid>
                                    <Grid item xs={6} id='spaceField'>
                                        <TextField required id="standard-required spaceField" label="Confirmar contraseña" defaultValue="" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </form>
                </Paper>
            </Container >
        )
    }
}