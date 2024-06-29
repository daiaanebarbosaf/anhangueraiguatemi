import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.bgColor};

    width: 20rem;
    height: 25rem;
  
    border-radius: 8px;

    main {
        .course { 
            width:100%;

            display: flex;
            align-items: center;
            justify-content: center;

            flex-direction: column;

            gap: 0.8rem;
        
            img {
                width: 70%;
                height: 11rem;
                border-radius: 50%;
                
                object-fit: cover;
            }

            .description {
                display: flex;
                align-items: start;
                justify-content: center;

                flex-direction: column;
                
                color: ${props => props.theme.textColor};
                gap: 0.2rem;

                h2 {
                    font-weight: bold;
                    font-size: 1.2rem;
                    color: ${props => props.theme.primaryColor};
                }

                p {
                    span {
                        font-weight: bold;
                    }
                }
            }
    }

    }   


`;