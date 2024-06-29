import { Container } from './style'

export interface ButtonProps {
    title: string;
}

export function Button({title, ...rest}:ButtonProps) {
    return(
        <Container 
            type="button"
            {...rest}
        >
            {title}

        </Container>
    );

}