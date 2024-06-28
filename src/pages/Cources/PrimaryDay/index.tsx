import { ButtonText } from "../../../components/ButtonText";
import { NavLink, useNavigate } from 'react-router-dom';

import { Container } from './styles';

import diaVinteDois from '../../../assets/cources/day22.png'


export function PrimaryDay() {
    const navigate = useNavigate();

    function handleBack(){
        navigate("/");
    }  
      
    return(
        <Container>
            <header>
                <ButtonText
                    title="voltar"
                    onClick={handleBack}
                />

            </header>

            
            <div className="cources">
                <h1> Cursos do dia 22 de junho</h1>
                <div className="cource">
               
                    <NavLink to="https://doity.com.br/anhangueracf-ped01"  target="_blanc">
                        <img src={diaVinteDois} alt=" Card do Curso de LIBRAS no Contexto Escolar" />
                    </NavLink>
                </div>
            </div>
        </Container>
    )
}