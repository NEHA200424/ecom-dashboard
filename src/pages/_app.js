// src/pages/_app.js
import { useMemo, useState, createContext, useContext } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import '../styles/globals.css';
import '@fontsource/poppins';
import '@fontsource/roboto-mono';


// // ✅ Add Leaflet styles here
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-defaulticon-compatibility';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

// Theme context for dark/light toggle
export const ColorModeContext = createContext();
export const useColorMode = () => useContext(ColorModeContext);

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('dark'); // default theme mode

  const toggleColorMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'dark' ? '#121212' : '#fafafa',
        paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#000000',
        secondary: mode === 'dark' ? '#cccccc' : '#333333',
      },
      primary: {
        main: '#FFB200',
      },
      secondary: {
        main: '#EB5B00',
      },
    },
    typography: {
      fontFamily: `'Poppins', sans-serif`, // Global font
    },
    shape: {
      borderRadius: 10,
    },
  }), [mode]);


  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}





