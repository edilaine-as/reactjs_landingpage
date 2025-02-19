import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout/>} >
            <Route path='/' element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
