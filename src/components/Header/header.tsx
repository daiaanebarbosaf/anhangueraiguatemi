import { Container } from "./style";
import logoHorizontal from '../../assets/horiz-negativa-anhanguera-iguatemi.png'
import { NavLink } from "react-router-dom";

export function Header() {
    return(
        <Container>
            <NavLink to="/">
                <img src={logoHorizontal} alt="" />
            </NavLink>
        </Container>
    )
}