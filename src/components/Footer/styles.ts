import styled from "styled-components"

export const Container = styled.header`
    width: 100%;
    height: 100%;

    .containerFooter {
        display: flex;
        align-items: center;
        justify-content: space-between;

  

        padding: 2rem;
        background-color: ${props => props.theme.primaryColor};
        

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

    @media (max-width: 728px){
        .containerFooter {
            font-size: 0.8rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            padding: 2rem;

            img {
                margin-left: -1rem;
            }

        }
    }
    

`