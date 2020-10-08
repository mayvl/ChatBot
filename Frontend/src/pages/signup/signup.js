import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, TextField, Grid, MenuItem, Container, Button } from '@material-ui/core';
import Title from '../../components/title/title';

import '../../global.css';
import './signup.css';


export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            username: '',
            password: '',
            showError: true,
            loginError: '*su usuario y/o contraseña son requeridos',
        }
    }


    Homepage() {
        this.props.history.push("/home");
        console.log(this.state.username, this.state.password)
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveUser() {
        fetch('http://localhost:8000/api/create-new-user/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then(
                (response) => {
                    // debugger
                    if (!response.ok) {

                        throw Error(responsex)
                    }
                    return response
                }
            )
            .then(
                (response) => {

                    this.Homepage()
                },
                (error) => {
                    this.setState({ showError: false })
                    console.log(error)
                }
            )
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

                            <Grid container spacing={2} className='gridPaperContainer'>

                                <Grid item xs={12} sm={6} md={12} id='spaceField'>
                                    <TextField
                                        required={!this.state.showError && this.state.firstName == ''}
                                        id="standard-required spaceField"
                                        label="Nombre completo"
                                        name="firstName"
                                        onChange={e => this.handleChange(e)} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={12} id='spaceField'>
                                    <TextField id="standard-required spaceField" label="Pais" defaultValue="" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={12} id='spaceField'>
                                    <TextField
                                        id="standard-required spaceField"
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
                                <Grid item xs={12} sm={6} md={12} id='spaceField'>
                                    <TextField
                                        required={!this.state.showError && this.state.username == ''}
                                        id="standard-required spaceField"
                                        label=" usuario"
                                        name="username"
                                        onChange={e => this.handleChange(e)} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={12} id='spaceField'>
                                    <TextField
                                        required={!this.state.showError && this.state.password == ''}
                                        id="standard-required spaceField"
                                        label="Contraseña"
                                        name="password"
                                        onChange={e => this.handleChange(e)} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={12} id='spaceField'>
                                    <TextField

                                        id="standard-required spaceField"
                                        label="Confirmar contraseña"
                                        defaultValue="" />
                                </Grid>
                                {this.state.showError ? '' : this.state.loginError}
                            </Grid>

                         </div>
                    </form> 
                    <div>
                        <Button className='buttonLoginStyle' onClick={() => this.saveUser()}>
                            Login!
                        </Button>
                    </div>
               </Paper> 

            </Container >
        )
    }
}