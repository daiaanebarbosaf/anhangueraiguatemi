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