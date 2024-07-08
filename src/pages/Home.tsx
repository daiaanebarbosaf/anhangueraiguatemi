import { NavLink } from 'react-router-dom';
import { HomeContainer } from "../styles";
import { Header } from '../components/Header/header';

export function Home() {
    return(
        <HomeContainer>
            <Header />
            <main>
                
                <h1>Eventos e Cursos</h1>

                <ul>
                    <li>
                    <NavLink
                        to="/courses"
                    >
                        Cursos de Férias
                    </NavLink>
                    
                    </li>

                    <li>
                    <NavLink
                        to="https://calendly.com/anhanguera-academico-iguatemi/coordenacao-academica?month=2024-07"
                        target='_blank'
                    >
                        Agende um Horário Com a Coordenação
                    </NavLink>
                    
                    </li>
                </ul>
            </main>
          </HomeContainer>
    )
}