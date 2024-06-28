import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export function Courses() {
    const navigate = useNavigate();

    function handleBack(){
        navigate("/");
    }  
      
    return(
        <Container>
            <ButtonText
                title="voltar"
                onClick={handleBack}
            />
        </Container>
    )
}