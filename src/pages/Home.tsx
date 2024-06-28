import { NavLink } from 'react-router-dom';
import avatarAnhanguera from '../assets/anhanguera-iguatemi.png'
import { HomeContainer } from "../styles";

export function Home() {
    return(
        <HomeContainer>
            <NavLink to="https://www.instagram.com/anhanguera.iguatemi" target="_blank">
                <img className="avatar" src={avatarAnhanguera} alt="Imagem do perfil do Instagram Anhanguera Iguatemi"/>
            </NavLink>

            <h1>Anhanguera Salvador Iguatemi</h1>
            <p className="username">Eventos</p>

            <ul>
                <li>
                <NavLink
                    to="/courses" target="_blank">Cursos de Férias
                </NavLink>
                </li>
            </ul>
          </HomeContainer>
    )
}