import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Paths from './Routes/Paths';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Paths />
    </ThemeProvider>
  )
}

export default App
