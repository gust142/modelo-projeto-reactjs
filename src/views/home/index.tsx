import React from 'react';
import { Box, Button } from '@material-ui/core'
import { Container } from './styles';
import deleteMe from '../../services/deleteMe';


class HomePage extends React.Component{
    lista(){
        deleteMe.listar().then(response=>{
          console.log(response);
        }).catch(error=>{
          console.log(error);
        })
      }

    render(){
        return (
        <>
        <Container>
            <Box overflow="auto" width="1" height="1">
                    <Box id="logos">
                    <img src={require("assets/logo.png")}  id="logos"/>
                    </Box>
                            <Box id="title">
                                <div>
                                <Button href="#cadastro" onClick={this.lista} id="botao" size="large" color="primary">Cadastrar</Button>
                                <Button href="#" id="botao" size="large" color="primary">{process.env.BASE_URL}</Button>
                                </div>
                                
                            </Box>
            </Box>
        </Container>


        </>
        );
    };
}

export default HomePage;
