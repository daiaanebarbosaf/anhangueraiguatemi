import { NavLink } from "react-router-dom";

import { Container } from "./styles";

export interface CourseProps {
    image: string;
    url: string;
}


export function Course({image, url}:CourseProps) {
    return(
        <Container >
            <main>
                <NavLink 
                    className="course"
                    to={url} 
                    target="_blank"
                >
                    <img src={image} alt="Foto do palestrante" />
                    
                </NavLink>
            </main>
        </Container>
    )
}