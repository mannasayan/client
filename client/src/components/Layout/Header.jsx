import React from 'react'
import {Box, Button, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <Box
    display={'flex'}
    justifyContent={'space-between'}
    bgcolor={'#fff'}
    padding={'10px 80px'}
    alignItems={'center'}
    // height={'155px'}
    >
        <Box>
            <img
            style={{width:'80px',height:'80px',flexShrink:0,
        }}
            src={logo} alt='logo' />
        </Box>
        <Box
        >
        <Link style={{textDecoration:'none',padding:'20px',fontSize:20,color:'black'}}>About Us</Link>
        <Link style={{textDecoration:'none',padding:'20px',fontSize:20,color:'black'}}>Causes</Link>
        <Link style={{textDecoration:'none',padding:'20px',fontSize:20,color:'black'}}>Contact</Link>
        </Box>
        <Box>
        <Button sx={{borderRadius:"20px",bgcolor:'red',padding:'7px 20px'}}>
        <Typography color={'#fff'}>Donate</Typography>
        </Button>
        </Box>
    </Box>
  )
}

export default Header