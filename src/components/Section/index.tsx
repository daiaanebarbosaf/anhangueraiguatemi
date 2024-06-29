import { Container } from "./styles";

export interface SectionProps {
    title: string;
    children: string;
}

export function Section({ title, children }:SectionProps){
    return (
        <Container>
            <h2>{title}</h2>     
                {children}
        </Container>
    );
}