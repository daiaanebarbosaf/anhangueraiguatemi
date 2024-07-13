import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .imgCourses {
         width: 100%;
    }

    main {
        width: 100%;
        margin-top: 1.5rem;

        padding-inline: 2.4rem;

        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
      
        justify-content: center;

        .container {
            width: 50rem;
            height: 30rem;

        }

        .slide-item {
            width: 100%;
            height: 100%;
        }

    }

    @media (max-width: 720px){
        main {
            .container {
                width: 20rem;
                height: 10rem;
            }

            .slide-item {
                width: 100%;
                height: 30rem;
            }

            
        }
    }


`;