import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 50rem;
  
    

    main {
        .course { 
            width:100%;

            display: flex;
            align-items: center;
            justify-content: center;

            flex-direction: column;

            gap: 0.8rem;
        
            img {
                width: 100%;
                height: 100%;
                
                border-radius: 8px;
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
                    font-size: 0.9rem;
                    color: ${props => props.theme.primaryColor};
                }

                p {
                    font-size: 0.8rem;
                    span {
                        font-weight: bold;
                    }
                }
            }
    }

    }
    
    @media (max-width: 720px){
        width: 20rem;
        height: 25rem;

        main {
            .course {
                img {

                }
            }
        }
    }
`;