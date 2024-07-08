import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,
    html {
        width: 100%;
        height: 100vh;
    }


    body {
        color: ${props => props.theme.textColor};
        background-color: ${props => props.theme.bgColor_100};
        -webkit-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    a {
        text-decoration: none;
    }

    button {
        transition: filter 0.2s;
    }

    button, a {
        cursor: pointer;
        
    }

    button:hover {
        filter:brightness(0.9);
    }
      

    @media (max-width: 728px){
        font-size: 0.5rem;
    }
`