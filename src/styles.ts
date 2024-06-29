import styled from 'styled-components'

export const HomeContainer = styled.main`

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 5rem;
  flex-direction: column;

  .avatar {
    width: 100%;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    padding: 3.7px;
    border: ${props => props.theme.primaryColor} solid 4px;

    transition: background 400ms;
  }

img.avatar:hover {
  border: ${props => props.theme.primaryColorDark}  solid 4px;
}

h1 {
  font-size: 2rem;
  margin-top: 1.5rem;
  cursor: pointer;
 
}

.username {
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  opacity: 0.8;
  font-size: 1.2rem;
  text-transform: uppercase;

  margin-top: 1rem;
  margin-bottom: 2rem;
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

ul li a:hover {
  background: rgba(171, 143, 223, 0.34);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.6px);
  -webkit-backdrop-filter: blur(1.6px);
  border: 1px solid rgba(171, 143, 223, 0.93);
}

@media (max-width: 728px){

  ul {
    list-style: none;
    width: 100%;
  }

  ul li a {
    padding: 1rem;
    font-size: 0.7rem;
  }
  
}
`;