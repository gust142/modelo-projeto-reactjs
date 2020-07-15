import React from 'react';
import { Typography, Box, Button } from '@material-ui/core'
import { Container } from './styles';
import logo from '../../assets/logo.png';



export default function HomePage() {
  return (
    <>
     <Container>
            <Box overflow="auto" width="1" height="1">
				<Box id="logos">
					<img src={logo}  id="logos"/>
				</Box>
                <Box id="title">
                    <div>
                    <Button href="#cadastro" id="botao" size="large" color="primary">Cadastrar</Button>
                    <Button href="#" id="botao" size="large" color="primary">Login</Button>
                    </div>
                    <Button href="#text-buttons" id="botao" size="large" color="primary">Contato</Button>
                    <Button href="#text-buttons" id="botao" size="large" color="primary">Contato</Button>
                </Box>
				
			</Box>
        </Container>
    
  </>
    
  );
}


