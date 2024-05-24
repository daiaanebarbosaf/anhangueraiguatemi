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
        <p className="username">Eventos</p>

        <ul>
          <li>
            <a 
              href="https://doity.com.br/anhanguera-workshop-mpce" target="_blank">Workshop: Marca Pessoal e Campo de Estágio
            </a>
          </li>
        </ul>
      </HomeContainer>
      <GlobalStyle />
    </ThemeProvider>

  )
}
