import { useState } from 'react'
import Layout from './pages/Layout'
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  )
}

export default App
