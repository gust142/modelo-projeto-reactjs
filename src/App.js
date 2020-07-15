import React from 'react';
import Routes from './routes';
import { Grid ,CssBaseline } from '@material-ui/core';
import { Container } from './styles'

const content = () => <Grid id='center-container' item xs={12}> <Routes></Routes> </Grid>


export default function App() {
  return (
    <>
    <CssBaseline></CssBaseline>
    <Grid id='center-container' item xs={12}> <Routes></Routes> </Grid>
      
  </>
  );
}


