import styled from 'styled-components'

export const HomeContainer = styled.main`
--bg-color: #ebd8bf;
  --text-color: #444449;
  --primary-color: #e48315;
  --primary-color-dark: #4C3575;

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
    border: var(--primary-color) solid 4px;

    transition: background 400ms;
  }

img.avatar:hover {
  border: var(--primary-color-dark) solid 4px;
}

h1 {
  font-size: 2rem;
  color: var(--text-color);
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
  background: var(--primary-color);
  color:var(--bg-color);
  text-transform: uppercase;
  font-size: 0.8rem;

  margin-bottom: 1rem;
  border-radius: 6px;

  transition: background 400ms;

  text-decoration: none;
}

ul li a:hover {
  background: var(--primary-color-dark);
}

@media (max-width: 728px){
  ul {
    list-style: none;
    width: 90%;
  }
  
}

`;