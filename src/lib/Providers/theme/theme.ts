import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1586fd",
    },
    secondary: {
      main: "#666f73",
    },
  },

  components: {
      MuiButton: {
        defaultProps: {
          variant: "contained",
          color: "primary",
        },
        styleOverrides: {
          root: {
            padding: "10px 20px",
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "lg",
        }
      },
    },
    typography: {
      body1: {
        color: "#0B1134CC"
      },
    }
});

theme.shadows[1] = "0px 5px 22px lightgray";
