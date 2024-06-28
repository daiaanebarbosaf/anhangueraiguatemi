import { Container } from "./style";
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";

export function Header() {
    return(
        <Container>
            <NavLink to="/">
                <img src={logo} alt="" />
            </NavLink>
        </Container>
    )
}