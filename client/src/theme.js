import { createTheme } from '@mui/material/styles';

// black: {
//    100: "#d3d3d4",
//    200: "#a8a8a8",
//    300: "#7c7c7d",
//    400: "#515151",
//    500: "#252526",
//    600: "#1e1e1e",
//    700: "#161617",
//    800: "#0f0f0f",
//    900: "#070708"
// },

// black: {
//    100: "#d8d8d8",
//    200: "#b1b1b1",
//    300: "#8a8a8a",
//    400: "#636363",
//    500: "#3c3c3c",
//    600: "#303030",
//    700: "#242424",
//    800: "#181818",
//    900: "#0c0c0c"
// },

// black: {
//    100: "#cdd7df",
//    200: "#9bb0bf",
//    300: "#68889e",
//    400: "#36617e",
//    500: "#04395e",
//    600: "#032e4b",
//    700: "#022238",
//    800: "#021726",
//    900: "#010b13"
// },

// blue: {
//    100: "#cce2f7",
//    200: "#99c6ef",
//    300: "#66a9e6",
//    400: "#338dde",
//    500: "#0070d6",
//    600: "#005aab",
//    700: "#004380",
//    800: "#002d56",
//    900: "#00162b"
// },

// gray: {
//    100: "#eef5fc",
//    200: "#dceaf8",
//    300: "#cbe0f5",
//    400: "#b9d5f1",
//    500: "#a8cbee",
//    600: "#86a2be",
//    700: "#657a8f",
//    800: "#43515f",
//    900: "#222930"
// },

// black: {
//    100: "#d0d5d5",
//    200: "#a2acaa",
//    300: "#738280",
//    400: "#455955",
//    500: "#162f2b",
//    600: "#122622",
//    700: "#0d1c1a",
//    800: "#091311",
//    900: "#040909"
// },

// indigo: {
//    100: "#d6e1df",
//    200: "#adc3bf",
//    300: "#84a49f",
//    400: "#5b867f",
//    500: "#32685f",
//    600: "#28534c",
//    700: "#1e3e39",
//    800: "#142a26",
//    900: "#0a1513"
// },

export const tokensDark = {
  grey: {
    0: '#ffffff',
    10: '#f6f6f6',
    50: '#f0f0f0',
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414',
    1000: '#000000',
  },
  primary: {
    100: '#d3d3d4',
    200: '#a8a8a8',
    300: '#7c7c7d',
    400: '#515151',
    500: '#252526',
    600: '#1e1e1e',
    700: '#161617',
    800: '#0f0f0f',
    900: '#070708',
  },
  secondary: {
    100: '#d6e1df',
    200: '#adc3bf',
    300: '#84a49f',
    400: '#5b867f',
    500: '#32685f',
    600: '#28534c',
    700: '#1e3e39',
    800: '#142a26',
    900: '#0a1513',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      ...tokensDark.primary,
      main: tokensDark.primary[400],
      light: tokensDark.primary[400],
    },
    secondary: {
      ...tokensDark.secondary,
      main: tokensDark.secondary[300],
    },
    neutral: {
      ...tokensDark.grey,
      main: tokensDark.grey[500],
    },
    background: {
      default: tokensDark.primary[800],
      alt: tokensDark.primary[400],
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 40,
    },
    h2: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h3: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 24,
    },
    h4: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h5: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 16,
    },
    h6: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 14,
    },
  },
});
