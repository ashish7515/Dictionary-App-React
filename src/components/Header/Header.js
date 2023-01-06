import { TextField } from '@mui/material';
import React from 'react';
import './Header.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { color } from '@mui/system';
// import CssBaseline from '@mui/material/CssBaseline';

const Header = ({word,setWord}) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main:'#000000',
            },
          type : "dark",
        },
      });

  return (
    <div classname = 'header'>
      <span className="title">{word? word : "Word Dictionary"}</span>
      <div className="inputs" style={{marginTop:"5vh"}}>
        <ThemeProvider theme={darkTheme}>
        <TextField 
            className="search" 
            id="standard-basic" 
            label="Search a word" 
            variant="standard" 
            value={word}
            onChange={(e)=> setWord(e.target.value)}
        />
      </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
