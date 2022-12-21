import { createTheme } from '@mui/material';

const light = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#37cdfa',
      light: '#7cffff',
      dark: '#009cc7',
      contrastText: '#fff',
    },
    secondary: {
      main: '#6B4BCC',
      light: '#9F78FF',
      dark: '#34209A',
      contrastText: '#fff',
    },
    error: {
      main: '#F2323F',
      light: '#ff6c6a',
      dark: '#b80018',
      contrastText: '#fff',
    },
    warning: {
      main: '#FCB017',
      light: '#FFE253',
      dark: '#C48100',
      contrastText: '#fff',
    },
    info: {
      main: '#374FC7',
      light: '#737bfb',
      dark: '#002795',
      contrastText: '#fff',
    },
    success: {
      main: '#23BA99',
      light: '#65EDCA',
      dark: '#00896D',
      contrastText: '#fff',
    },
    grey: {
      '50': '#F8F9FA',
      '100': '#E8EAED',
      '200': '#D5D7DB',
      '300': '#BABDC2',
      '400': '#9FA1A6',
      '500': '#7E8085',
      '600': '#606266',
      '700': '#404145',
      '800': '#2C2D30',
      '900': '#141518',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
    },
  },
});

const dark = createTheme({});

const v1 = {
  light,
  dark,
};

export default v1;
