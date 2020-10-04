import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Paper, TextField, Grid, Button, Container, IconButton } from '@material-ui/core';
import Title from '../../components/title/title';
import './login.css';
import '../../global.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showError: true,
            loginError: '*su usuario y/o contraseña son incorrectos',

        }
        this.handleChange = this.handleChange.bind(this);
        this.fetchUser = this.fetchUser.bind(this)
    }


    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value })
    }

    Homepage() {
        this.props.history.push("/home");
        console.log(this.state.username, this.state.password)
    }



    fetchUser() {

        fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then(
                (response) => {
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
                            <Grid container>
                                <Grid item xs={6}>
                                    <Grid item id='spaceField'>
                                        <TextField id="standard-required spaceField"
                                            label="Nombre de usuario"
                                            name="username"
                                            error={!this.state.showError && this.state.username != '' }
                                            value={this.state.username}
                                            onChange={e => this.handleChange(e)}
                                        /> <br />
                                    </Grid>
                                    <Grid id='spaceField'>
                                        <TextField type='password' id="standard-required spaceField"
                                            label="Contraseña"
                                            name="password"
                                            error={!this.state.showError && this.state.password != '' }
                                            value={this.state.password}
                                            onChange={e => this.handleChange(e)} /> <br />
                                    </Grid>
                                    {this.state.showError ? '' : this.state.loginError}
                                </Grid>

                            </Grid>
                        </div>
                    </form>
                    <div>
                        <Button className='buttonLoginStyle' onClick={() => this.fetchUser()}>
                            Login!
                        </Button>
                    </div>
                </Paper>
            </Container>
        )
    }
}