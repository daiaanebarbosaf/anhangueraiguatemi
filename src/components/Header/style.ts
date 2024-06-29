import styled from "styled-components"

export const Container = styled.header`
    
    display: flex;
    align-items: center;
    justify-content: center;

    height: 5rem;

    background-color: ${props => props.theme.primaryColor};

    img {
        width: 15rem;
       
    }
`