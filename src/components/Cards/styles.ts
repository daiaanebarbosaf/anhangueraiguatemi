import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
       

    main {
        .cards {
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            

            background-color: ${props => props.theme.bgColor};
            border-radius: 8px;

            .card { 
                width: 100%;
                height: 100%;


                display: flex;
                align-items: center;
                justify-content: start;

                flex-direction: column;         

                gap: 1rem;
        
            img {
                border-radius: 8px;
                width: 20rem;
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
                    font-size: 0.8rem;
                    color: ${props => props.theme.textColor};
                }

                p {
                    span {
                        font-weight: bold;
                    }
                }
            }
    }
        }


    } 
    
    @media(max-width: 728px){
        main {           
            .cards {
                width: 100%;
                display: flex;
                flex-direction: column;

                width: 15rem;
                height: 12rem;

                margin: 1rem;

                .card {
                    img {
                        border-radius: 8px;
                        width: 100%;
                    }
                }
            }
        }
    }
`;