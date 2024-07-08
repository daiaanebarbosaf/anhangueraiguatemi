import styled from "styled-components"

export const Container = styled.header`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 5rem;

    height: 5rem;

    background-color: ${props => props.theme.primaryColor};

    img {
        width: 15rem;
       
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        transition: filter 0.2s;
        list-style: none;

        li a {
            color: ${props => props.theme.bgColor_100};
            text-decoration: none;
        }

        li a:hover {
            color: ${props => props.theme.bgColor_100};
            text-decoration: underline;

        }
    }
`