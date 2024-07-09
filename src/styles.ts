import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  
  main {
    width: 100%;

    text-align: center;

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

    ul {
      list-style: none;
      width: 50%;
    }

    ul li a {
      height: 3rem;
      
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props => props.theme.primaryColor};
      color: ${props => props.theme.textColor};
      text-transform: uppercase;
      font-size: 0.8rem;

      margin-bottom: 1rem;
      border-radius: 6px;

      transition: background 400ms;

      text-decoration: none;
    }

}

@media (max-width: 728px){

  .cards {
    flex-direction: column;
  }
    
}


`;