import styled from "styled-components";

export const Container = styled.div`

    .daysOfCources {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 15rem;

        gap: 1rem;
    }

    .textButtonDay {
        text-decoration: none;
        color: ${props => props.theme.textColor}; 
    }

    .buttonDay {

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        width: 30%;
        background-color: ${props => props.theme.primaryColor};        

        height: 2.5rem;
        border: 0;
    
        border-radius: 5px;
        
        font-weight: 400;
        font-size: 0.7rem;
    }
`;