import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from './styles/global'

import { HomeContainer } from "./styles";
import avatarAnhanguera from './assets/anhanguera-iguatemi.png'


 export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      
        <HomeContainer>
        
        <a href="https://www.instagram.com/anhanguera.iguatemi" target="_blank">
          <img className="avatar" src={avatarAnhanguera} alt="Imagem do perfil do Instagram Anhanguera Iguatemi"/>
        </a>

        <h1>Anhanguera Salvador Iguatemi</h1>
        <p className="username">Reforço de Matemática</p>

        <ul>

          <li>
            <a 
              href="https://doity.com.br/anhanguera-reforco-mat-03" target="_blank">09 de Maio - Dia 03
            </a>
          </li>
          <li>
            <a 
              href="https://doity.com.br/anhanguera-reforco-mat-04" target="_blank">16 de Maio - Dia 04
            </a>
          </li>
        <li>
            <a 
              href="https://doity.com.br/anhanguera-reforco-mat-05" target="_blank">23 de Abril - Dia 05
            </a>
          </li>
        </ul>
      </HomeContainer>
      <GlobalStyle />
    </ThemeProvider>

  )
}
