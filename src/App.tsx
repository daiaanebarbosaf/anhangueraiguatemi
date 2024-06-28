import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from './styles/global'
import {BrowserRouter} from 'react-router-dom'

import { HomeContainer } from "./styles";

import { Router } from "./Router";


 export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
        <HomeContainer>
        </HomeContainer>
        <GlobalStyle />
      </BrowserRouter>

    </ThemeProvider>

  )
}
