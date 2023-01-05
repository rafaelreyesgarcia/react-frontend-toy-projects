import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import PersistentDrawerLeft from './PersistentDrawer';
import Test from './Test';
import Project from './Project';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Box
          sx={{
            display: 'flex'
          }}
        >
          <CssBaseline />
          <PersistentDrawerLeft />
          <Routes>
            <Route 
              path='/'
              element={<Test />}
            />
            <Route 
              path='/project'
              element={<Project />}
            />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;

/* 
import {
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';

return (
  <AppBar component='nav'>
    <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
      <Typography variant='h4'>Frontend React Projects</Typography>
    </Toolbar>
  </AppBar>
);
*/