"use client"
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main:"#1976d2"
        },
        secondary: {
            main: "#9c27b0"
        },
        text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)'
        }
    },
    typography: {
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            "@media (min-width: 600px)": {
                fontSize: '3.5rem'
            },
            "@media (min-width: 900px" : {
                fontSize: '4.5rem'
            }
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            "@media (min-width: 600px)": {
                fontSize: '3rem'
            },
            "@media (min-width: 900px)": {
                fontSize: '3rem'
            }
        },
        h3: {
            fontSize: "1.65rem",
            fontWeight:500,
            "@media (min-width: 600px)": {
                fontSize: '2rem'
            }
        },
        body1: {
            fontSize:'1rem',
            '@media (min-width: 600px)': {
                fontSize: '1.1rem'
            }
        },
    },
    components: {
        MuiTypography:{
            styleOverrides: {
                h1: {
                    marginBottom: '16px',
                    marginTop: '32px'
                },
                h2: {
                   marginBottom: '24px'
                },
                h3: {
                    marginBottom:'16px'
                },
                h4: {
                    marginBottom: '12px'
                },
                h5: {
                    marginBottom:  '12px'
                },
                h6: {
                    marginBottom: '12px'
                },
                body1: {
                    marginBottom: '32px'
                },
                body2: {
                    marginBottom: '8px'
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingTop: '32px',
                    paddingBottom: '32px'
                }
            }
        }
    }

})

export default theme;