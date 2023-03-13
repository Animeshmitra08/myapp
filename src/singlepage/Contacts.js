import { Box, Toolbar } from '@mui/material'
import React from 'react'
import DrawerAppBar from '../NavComponents/DrawerAppBar'
import Footer from '../NavComponents/Footer'

const Contacts = () => {
  return (
    <>
        <DrawerAppBar/>
        <Box sx={{p:2}}>
          <Toolbar/>
          <h1>Contacts</h1>
        </Box>
        <Footer/>
    </>
  )
}

export default Contacts