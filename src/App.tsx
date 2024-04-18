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
        <p className="username">1ª jornada  de conscientização sobre TEA</p>

        <ul>

          <li>
            <a 
              href="https://doity.com.br/anhangueraoficinatea01" target="_blank">15 de Abril - Oficina 01
            </a>
          </li>
          <li>
            <a 
              href="https://doity.com.br/anhangueraoficinatea02" target="_blank">16 de Abril - Oficina 02
            </a>
          </li>
        <li>
            <a 
              href="https://doity.com.br/anhangueraoficinatea03" target="_blank">17 de Abril - Oficina 03
            </a>
          </li>
          <li>
            <a 
              href="https://doity.com.br/anhangueraoficinatea04" target="_blank">18 de Abril - Oficina 04
            </a>
          </li>
        </ul>
      </HomeContainer>
      <GlobalStyle />
    </ThemeProvider>

  )
}
