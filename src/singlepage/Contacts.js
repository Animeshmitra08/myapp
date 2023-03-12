import { Box, Toolbar } from '@mui/material'
import React from 'react'
import DrawerAppBar from '../NavComponents/DrawerAppBar'

const Contacts = () => {
  return (
    <>
        <DrawerAppBar/>
        <Box sx={{p:2}}>
          <Toolbar/>
          <h1>Contacts</h1>
        </Box>
    </>
  )
}

export default Contacts