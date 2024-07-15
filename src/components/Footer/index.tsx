import { Container } from "./styles";
import logoFooter from '../../assets/horiz-negativa-anhanguera-iguatemi.png'
import { NavLink } from "react-router-dom";

export function Footer() {
    return(
        <Container>
            <div className="containerFooter">
                <img  id="logoFooter" src={logoFooter} alt="Logo do footer" />
                <NavLink
                    className="footerText"
                    to="https://www.linkedin.com/in/daiaanebarbosaf/" 
                    target="_blank"
                >
                    © 2024 - Feito por <span>Daiane Farias</span> Todos os direitos reservados.
                </NavLink>
            </div>
        </Container>
    )
}