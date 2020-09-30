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

        }
    }

    Homepage(){
        this.props.history.push("/home");
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
                                        <TextField id="standard-required spaceField" label="Nombre de usuario" /> <br />
                                    </Grid>
                                    <Grid id='spaceField'>
                                        <TextField type='password' id="standard-required spaceField" label="Contraseña" defaultValue="" /> <br />
                                    </Grid>
                                </Grid>

                            </Grid>
                        </div>
                    </form>
                    <div>
                        <Button className='buttonLoginStyle' onClick={()=>this.Homepage()}>
                            Login!
                        </Button>
                    </div>
                </Paper>
            </Container>
        )
    }
}