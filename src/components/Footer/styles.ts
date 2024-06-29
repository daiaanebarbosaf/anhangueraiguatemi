import styled from "styled-components"

export const Container = styled.header`
    width: 100%;
    height: 100%;

    main {
        display: flex;
        align-items: center;
        justify-content: space-between;

        flex-direction: row;

        padding-block: 2rem;
        position:absolute;
        background-color: ${props => props.theme.primaryColor};

        font-size: 100;
        

        img {
            width: clamp(10vw, 10em, 30vw);
        }

        span {
            font-weight: bold;
            text-decoration: underline;
        }

        .footerText {
            color: ${props => props.theme.bgColor};
            
        }
    }
    

`