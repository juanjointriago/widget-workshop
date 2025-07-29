import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00BFFF', // Celeste
    },
    secondary: {
      main: '#FF0000', // Rojo
    },
    background: {
      default: '#FFFFFF', // Blanco
      paper: '#F5F5F5',
    },
    text: {
      primary: '#000000', // Negro
      secondary: '#555555',
    },
  },
});

export default theme;
