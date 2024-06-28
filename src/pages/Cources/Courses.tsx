import { ButtonText } from "../../components/ButtonText";
import { NavLink, useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Header } from "../../components/Header/header";


export function Courses() {

    return(
        <Container>
            <Header/>

            <div className="daysOfCources">
                <button className="buttonDay">
                    <NavLink to="/primaryday" className="textButtonDay">
                        22 de junho
                    </NavLink>
                </button>

                <button className="buttonDay">
                    <NavLink to="/secondday" className="textButtonDay">
                        23 de junho
                    </NavLink>
                </button>
            </div>

        </Container>
    )
}