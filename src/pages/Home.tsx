import { HomeContainer } from "../styles";
import { Header } from '../components/Header/header';

import coord from "../assets/coord.png"

import { Cards } from '../components/Cards';
import { Footer } from "../components/Footer";

export function Home() {
    return(
        <HomeContainer>
            <Header />
            <div className="container">
                <div>
                    <h1>Clique e saiba mais:</h1>
                </div>
            
                <div className="cards">
                    <div className="card">
                        <Cards
                            image={coord}
                            topic="Agende um Horário Com a Coordenação"
                            url="https://calendly.com/anhanguera-academico-iguatemi/coordenacao-academica?month=2024-07"
                        >

                        </Cards>
                    </div>

                </div>

            </div>

            <Footer/>
        </HomeContainer>
    )
}