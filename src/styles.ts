import styled from 'styled-components'

export const HomeContainer = styled.div`
  
  .container {
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    .cards {

      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      margin-bottom: 2rem;

    }

    .card:hover {
      filter:brightness(0.9);
    }

    h1 {
      font-size: 2rem;
      margin-top: 1.5rem;
      margin-bottom: 2rem;
      cursor: pointer;
    }


}

@media (max-width: 728px){

  .cards {
    flex-direction: column;
  }
    
}


`;

export const Banner = styled.div`
  width: 100%;
  
  .slide-item {
    height: 23.5rem;
  }

  .swiper-pagination-bullet {
    background-color: ${props => props.theme.secondaryColor}; /* Cor das bolinhas da paginação */
    opacity: 1; /* Define a opacidade das bolinhas */
  }

  .swiper-pagination-bullet-active {
    background-color: ${props => props.theme.bgColor}; /* Cor da bolinha ativa */
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${props => props.theme.secondaryColor}; /* Cor dos botões de navegação */
  }

  @media (max-width: 1024px){
    .slide-item {
      width: 100%;
      height: 20rem;

      display: flex;
      justify-content: center;

      padding: 5rem;
    }
  }

  @media (max-width: 728px){
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .containerSwiper {
      width: 100%;
    }
    
    .slide-item {
      width: 100%;
      height: 6rem;

      padding: 0rem;

      display: flex;
      justify-content: center;

  
    }

  }
  
`;