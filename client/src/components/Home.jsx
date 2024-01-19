import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import banner from '../assets/banner.png'

const Home = () => {
  return (
    <Box
      height={'100vh'}
    >
      <Box height={'830px'} sx={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat' }}>
        <Box
        sx={{position:'absolute'}}
        top='350px'
        left={'140px'}
        >
        <Typography color={'#fff'} fontSize={'60px'}>
          Unlocking Potectial,
        </Typography>
        <Typography color={'#fff'} fontSize={'70px'}>
          One Child At a Time.
        </Typography>
        </Box>
        <Box
        position={'absolute'}
        top={'580px'}
        left={'140px'}
        >
        <Button sx={{borderRadius:"20px",bgcolor:'red',padding:'6px 20px',color:'#fff', marginRight:"10px"}}>Donate</Button>
        <Button sx={{borderRadius:"20px",bgcolor:'#fff',padding:'6px 20px',color:'gray'}}>Discover</Button>
        </Box>
      </Box>
      <Box></Box>
      <Box></Box>

    </Box>
  )
}

export default Home