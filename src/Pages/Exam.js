import { Button, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Timer from '../Components/Timer'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Exam = () => {

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  }));

  return (
    <>


      <Box sx={{ flexGrow: 1 }}>

            <StyledPaper
            sx={{
              my: 1,
              mx: 'auto',
              p: 1,
            }}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs sx={{
                display:'flex',
                alignItems:'center'
              }}>
                <Typography>
                  Test 1
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained">Start Test</Button>
              </Grid>
            </Grid>
          </StyledPaper>


            <StyledPaper
            sx={{
              my: 1,
              mx: 'auto',
              p: 1,
            }}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs sx={{
                display:'flex',
                alignItems:'center'
              }}>
                <Typography>
                  Test 2
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained">Start Test</Button>
              </Grid>
            </Grid>
          </StyledPaper>


      </Box>


        <Timer duration={1*60*60*1000}/>
    </>
  )
}

export default Exam