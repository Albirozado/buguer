import React from 'react';
import {capitalize, colors, createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import {Typography} from '@mui/material';

const theme = createTheme({
    palette:{
        secondary:{
            main: "#ffff"
        
        }
    },
    typography: {
        button:{
            fontSize: 16,
            fontWeight: 500,
            textTransform:capitalize,
            padding: '0 1px',
            
        
           
            

        }
      },
    
})
const CustumizeTheme = () =>{
    return(
        <ThemeProvider theme={theme}>

        <div style={{display:"flex", justifyContent:"center"}}>

      <Button variant="outlined"  size="medium" color='secondary'  >
        <Typography variant='button'>
        postar
        </Typography>
      </Button>
        </div>


        </ThemeProvider>
    )
}
export default CustumizeTheme