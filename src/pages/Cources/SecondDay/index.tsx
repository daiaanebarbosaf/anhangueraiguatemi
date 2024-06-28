import { ButtonText } from "../../../components/ButtonText";
import { NavLink, useNavigate } from 'react-router-dom';

import { Container } from './styles';

import diaVinteTres from '../../../assets/cources/day23.png'


export function SecondDay() {
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
                <h1> Cursos do dia 23 de junho</h1>
                <div className="cource">
               
                    <NavLink to="https://doity.com.br/anhangueracf-edf"  target="_blanc">
                        <img src={diaVinteTres} alt=" Card do Curso de LIBRAS no Contexto Escolar" />
                    </NavLink>
                </div>
            </div>
        </Container>
    )
}