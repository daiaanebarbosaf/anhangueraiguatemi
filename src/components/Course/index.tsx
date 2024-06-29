import { NavLink } from "react-router-dom";

import { Container } from "./styles";


export function Course({image, topic, speaker, timeAndDate, modality, url}) {
    return(
        <Container >
            <main>
                <NavLink 
                    className="course"
                    to={url} 
                    target="_blank"
                >
                    <img src={image} alt="Foto do palestrante" />
                    
                    <div className="description">
                        <h2>{topic}</h2>
                        <p><span>Palestrante:</span>  {speaker}</p>
                        <p><span>Horário: </span> {timeAndDate}</p>
                        <p><span>Modadlidade: </span>{modality}</p>
                    </div>
                </NavLink>
            </main>
        </Container>
    )
}