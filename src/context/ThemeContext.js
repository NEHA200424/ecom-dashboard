// src/context/ThemeContext.js
import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    }
  }), []);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        ...(mode === 'dark'
          ? {
              background: {
                default: '#121212',
                paper: '#1E1E1E'
              },
              text: {
                primary: '#fff',
                secondary: '#aaa'
              }
            }
          : {
              background: {
                default: '#f4f6f8',
                paper: '#fff'
              },
              text: {
                primary: '#000',
                secondary: '#555'
              }
            }),
      },
      shape: {
        borderRadius: 10
      },
      typography: {
        fontFamily: 'Roboto, sans-serif'
      }
    }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};


