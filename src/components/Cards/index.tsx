import { NavLink } from "react-router-dom";

import { Container } from "./styles";

export interface CardsProps {
    image: string;
    topic: string;
    url: string;
}


export function Cards({image, topic, url}:CardsProps) {
    return(
        <Container >
            <main>
                <div className="cards">
                    <NavLink 
                        className="card"
                        to={url} 
                    >
                        <img src={image} alt="Foto do evento" />
                        
                        <div className="description">
                            <h2>{topic}</h2>
                        </div>
                    </NavLink>
                </div>
            </main>
        </Container>
    )
}