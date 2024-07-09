import { HomeContainer } from "../styles";
import { Header } from '../components/Header/header';

import capa from "../assets/capa.png"
import coord from "../assets/coord.png"

import { Cards } from '../components/Cards';

export function Home() {
    return(
        <HomeContainer>
            <Header />
            <main>
                <div>
                    <h1>Clique e sabiba mais:</h1>
                </div>
            
                <div className="cards">
                    <div className="card">
                        <Cards
                            image={capa}
                            topic="Cursos de Férias"
                            url="/courses"
                        >

                        </Cards>
                    </div>
                    <div className="card">
                        <Cards
                            image={coord}
                            topic="Agende um Horário Com a Coordenação"
                            url="https://calendly.com/anhanguera-academico-iguatemi/coordenacao-academica?month=2024-07"
                        >

                        </Cards>
                    </div>

                </div>

            </main>
          </HomeContainer>
    )
}