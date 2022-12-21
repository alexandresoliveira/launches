import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';

import { ThemeProvider } from '@mui/material';
import theme from '@/theme/index';

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme.v1.light}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
