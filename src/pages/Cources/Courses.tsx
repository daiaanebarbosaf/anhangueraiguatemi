import { Container } from './styles';
import { Header } from "../../components/Header/header";
import { Section } from "../../components/Section";
import { Course } from "../../components/Course";
import { Footer } from '../../components/Footer';

import sidnei from "../../assets/teachers/sidnei.png"
import nelmo from "../../assets/teachers/nelmo.png"
import angelo from "../../assets/teachers/angelo.png"
import sergio from "../../assets/teachers/sergio.png"
import carol from "../../assets/teachers/carol.png"
import tassia from "../../assets/teachers/tassia.png"
import faixa from "../../assets/faixa-site.png"


export function Courses() {

    return(
        <Container>
            <Header/>
            <img className='imgCourses' src={faixa} alt="" />
            <main>
                <Section title="> Dia 01 - 22 de Julho - Segunda-feira">
                    <div className='courseSectionHome'>
                        <Course
                            image={sidnei}
                            topic="LIBRAS no Contexto Escolar"
                            timeAndDate="19h"
                            speaker="Sidnei Lima"
                            modality="Presencial"
                            url="https://doity.com.br/anhangueracf-ped01"
                        >
                        </Course>
                    </div>
                </Section>

                <Section title="> Dia 02 - 23 de Julho - Terça-feira">
                    <div className='courseSectionHome'>
                        <Course
                            image={nelmo}
                            topic="Atividade Física e TEA"
                            timeAndDate="19h"
                            speaker="Nelmo de Jesus"
                            modality="Presencial"
                            url="https://doity.com.br/anhangueracf-edf"
                        >
                        </Course>
                    </div>
                </Section>

                <Section title="> Dia 03 - 24 de Julho - Quarta-feira">
                    <div 
                        className='coursesSectionHome'
                    >
                        <div className='courseSectionHome'>
                            <Course
                                image={angelo}
                                topic="Inteligência Artificial"
                                timeAndDate="19h"
                                speaker="Ângelo Lefundes"
                                modality="Presencial"
                                url="https://doity.com.br/anhangueracf-ads"
                            >
                            </Course>
                        </div>
                        <div className='courseSectionHome'>
                                <Course
                                    image={sidnei}
                                    topic="LIBRAS no Contexto Escolar 2ªEdição"
                                    timeAndDate="19h"
                                    speaker="Sidnei Lima"
                                    modality="Presencial"
                                    url="https://doity.com.br/anhangueracf-ped02"
                                >
                                </Course>
                            </div>

                    </div>
                </Section>

                <Section title="> Dia 04 - 25 de Julho - Quinta-feira">
                    <div className='coursesSectionHome'>
                        <div className='courseSectionHome'>
                            <Course
                                image={sergio}
                                topic="O Poder da Dieta Carnívora"
                                timeAndDate="19h"
                                speaker="Sérgio Leonardo"
                                modality="Presencial"
                                url="https://doity.com.br/anhangueracf-nutri"
                            >
                            </Course>
                        </div>

                        <div className='courseSectionHome'>
                            <Course
                                image={carol}
                                topic="Saúde e Segurança do Trabalho"
                                timeAndDate="19h"
                                speaker="Caroline Oliveira"
                                modality="Presencial"
                                url="https://doity.com.br/anhangueracf-eng"
                            >
                            </Course>
                        </div>

                        <div className='courseSectionHome'>
                            <Course
                                image={tassia}
                                topic="Acessibilidade nas Edificações"
                                timeAndDate="19h"
                                speaker="Caroline Oliveira"
                                modality="Presencial"
                                url="https://doity.com.br/anhangueracf-arq"
                            >
                            </Course>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </Container>
    )
}