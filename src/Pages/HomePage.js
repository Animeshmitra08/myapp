import React from 'react'
import DrawerAppBar from '../NavComponents/DrawerAppBar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Footer from '../NavComponents/Footer';
import { Typography } from '@mui/material';


const HomePage = () => {
  return (
    <>
      <DrawerAppBar/>
      <Box component="main" sx={{ p: 2 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sequi ut iure dolorum culpa perferendis adipisci ratione suscipit hic magni. Possimus fugit est asperiores, non, explicabo aut voluptas magni sint quasi hic minima, deleniti esse? Quam, iusto sequi corporis repellat culpa autem reiciendis optio! Vel rerum necessitatibus culpa. Eum, in.
        </Typography>   
      </Box>
      <Footer/>
    </>
  )
}

export default HomePage