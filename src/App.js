import React from 'react';
import Routes from './routes';
import { Grid ,CssBaseline} from '@material-ui/core';



export default function App() {

  return (
    <>
    <CssBaseline></CssBaseline>
    <Grid item xs={12}> <Routes></Routes> </Grid>
      
  </>
  );
}


