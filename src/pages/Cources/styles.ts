import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    .imgCourses {
            width: 100%;
    }

    main {
        width: 100%;

        margin-top: 1.5rem;

        position: relative;
        padding-inline: 2.4rem;

        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;

        gap: 3rem;

        .cardsSectionHome{
            
        }
        
        .cardSectionHome{
            width: 30rem;
            height: 30rem;
            img {
                width: 30rem;
            }
        }

        .coursesSectionHome {
            display: flex;
            align-items: center;
            justify-content: start;

            flex-direction: row;

            gap: 2rem;
        }

        .courseSectionHome:hover {
            opacity: 0.9;   

            background: rgba(171, 143, 223, 0.34);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(1.6px);
            -webkit-backdrop-filter: blur(1.6px);
            border: 1px solid rgba(171, 143, 223, 0.93);
        }
    }

    @media (max-width: 720px){
        main {
            display: flex;
            align-items: center;
            .coursesSectionHome {
                display: flex;
                align-items: center;
                
                flex-direction: column;
            }
        }
    }

    @keyframes go-back {
        from {
            transform: translateX(50px);
        }
        to {
            transform: translateX(0);
        }
    

}
`;