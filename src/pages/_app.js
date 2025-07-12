// src/pages/_app.js
import { useMemo, useState, createContext, useContext } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import '../styles/globals.css'; // Make sure this file exists

// Create ColorModeContext
export const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('dark'); // default theme mode

  const toggleColorMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'dark' ? '#121212' : '#fafafa',
        paper: mode === 'dark' ? '#1e1e1e' : '#fff',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#000000',
        secondary: mode === 'dark' ? '#cccccc' : '#333333',
      },
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
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




