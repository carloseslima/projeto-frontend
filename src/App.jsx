import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import { useState } from 'react'
import Layout from './pages/Layout'
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Paths from './Routes/Paths';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Paths />
    </ThemeProvider>
  )
}

export default App
