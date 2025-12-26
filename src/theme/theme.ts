"use client";
import { outlinedInputClasses } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      "@media (min-width: 600px)": {
        fontSize: "3.5rem",
      },
      "@media (min-width: 900px": {
        fontSize: "4.5rem",
      },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      "@media (min-width: 600px)": {
        fontSize: "3rem",
      },
      "@media (min-width: 900px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontSize: "1.65rem",
      fontWeight: 500,
      "@media (min-width: 600px)": {
        fontSize: "2rem",
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (min-width: 600px)": {
        fontSize: "1.1rem",
      },
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          marginBottom: "16px",
          marginTop: "32px",
        },
        h2: {
          marginBottom: "24px",
        },
        h3: {
          marginBottom: "16px",
        },
        h4: {
          marginBottom: "12px",
        },
        h5: {
          marginBottom: "12px",
        },
        h6: {
          marginBottom: "12px",
        },
        body1: {
          marginBottom: "32px",
        },
        body2: {
          marginBottom: "8px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: "32px",
          paddingBottom: "32px",
        },
      },
    },
MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '12px',
          fontSize: '0.75rem',
          padding: '6px 12px',
          minWidth: '80px',
          '@media (min-width: 600px)': {
            fontSize: '0.875rem',
            padding: '8px 16px',
            minWidth: '100px',
          },
          '@media (min-width: 900px)': {
            fontSize: '1rem',
            padding: '10px 20px',
            minWidth: '120px',
          },
          '@media (min-width: 1200px)': {
            fontSize: '1.125rem',
            padding: '12px 24px',
            minWidth: '140px',
          },
        },
        contained: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: 'white',
          color: 'white',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'white',
          },
        },
        text: {
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
    },

 MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.6)',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.9)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
              borderWidth: '3px',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.8)',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
            fontWeight: 600,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          color:'#1976d2'
        },
      },
    },
  },
});

export default theme;
