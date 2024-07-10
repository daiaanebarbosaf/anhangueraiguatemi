import { Container } from './styles';
import { Header } from "../../components/Header/header";
import { Section } from "../../components/Section";
import { Course } from "../../components/Course";
import { Footer } from '../../components/Footer';

import sidnei from "../../assets/teachers/sidnei.png"
import sidneiCard from "../../assets/cources/sidnei-card.png"
import nelmo from "../../assets/teachers/edf.png"
import angelo from "../../assets/teachers/angelo.png"
import sergio from "../../assets/teachers/sergio.png"
import carol from "../../assets/teachers/carol.png"
import tassia from "../../assets/teachers/tassia.png"
import alex from "../../assets/teachers/alex.png"
import juli from "../../assets/teachers/juli.png"
import ser from "../../assets/teachers/ser.png"
import edson from "../../assets/teachers/edson.png"
import joice from "../../assets/teachers/joice.png"
import enfermagem from "../../assets/teachers/enfermagem.png"

import faixa from "../../assets/faixa-site.png"
import { Cards } from '../../components/Cards';



export function Courses() {

    return(
        <Container>
            <Header/>
            
            <img className='imgCourses' src={faixa} alt="" />
            <main>
                <Section title="> Dia 01 - 22 de Julho - Segunda-feira">
                    <div className="cardsSectionHome">
                        <div className="cardSectionHome">
                            <Cards
                                image={sidneiCard}
                                topic="Cursos de Férias"
                                url="/courses"
                            >

                            </Cards>
                        </div>

                    </div>
                </Section>
                <Section title="> Dia 01 - 22 de Julho - Segunda-feira">
                    <div className='coursesSectionHome'>
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
                        <div className='courseSectionHome'>
                            <Course
                                image={alex}
                                topic="Como Fazer uma Excelente Entrevista e Estruturar um Bom Currículo"
                                timeAndDate="19h"
                                speaker="Alexandro Oliveira"
                                modality="Presencial"
                                url="https://doity.com.br/anhangueracf-gestao"
                            >
                            </Course>
                        </div>
                    </div>

                </Section>

                <Section title="> Dia 02 - 23 de Julho - Terça-feira">
                    <div className='coursesSectionHome'>
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
                        <div className='courseSectionHome'>
                            <Course
                                image={juli}
                                topic="Orientações de Coleta de Material Biológico e Interpretação de Solicitações Médicas"
                                timeAndDate="19h"
                                speaker="Juliana Santiago"
                                modality="Presencial"
                                url="https://doity.com.br/anhangueracf-enf"
                            >
                            </Course>
                        </div>
                        <div className='courseSectionHome'>
                            <Course
                                image={faixa}
                                topic="Gestão do Estresse e Qualidade de Vida"
                                timeAndDate="19h"
                                speaker="Iracema Lemos"
                                modality="Presencial"
                                url="https://doity.com.br/anhangueracf-ges"
                            >
                            </Course>
                        </div>
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
                        <div className='courseSectionHome'>
                            <Course
                                image={ser}
                                topic="Encontro Formativo Sistema de Justiça de Salvador-BA"
                                timeAndDate="19h"
                                speaker="Marcus Magalhães e Cátia Cordeiro"
                                modality="Presencial"
                                url="https://doity.com.br/anhangueracf-ser"
                            >
                                </Course>
                        </div>
                        <div className='courseSectionHome'>
                            <Course
                                image={edson}
                                topic="Suporte Básico de Vida"
                                timeAndDate="19h"
                                speaker="Edson Gomes"
                                modality="Presencial"
                                url="https://doity.com.br/anhangueracf-enfermagem"
                            >
                                </Course>
                        </div>
                        <div className='courseSectionHome'>
                            <Course
                                image={enfermagem}
                                topic="Mesa Redonda: Explorando as Possibilidades: Descobrindo sua Vocação Profissional"
                                timeAndDate="19h"
                                speaker="Cintia Fraga, Taine Daltro & Wesley Ramos"
                                modality="Presencial"
                                url="https://doity.com.br/anhangueracf-efermagem02"
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
                                speaker="Leonardo Neto & João Tavares"
                                modality="Presencial"
                                url="https://doity.com.br/anhangueracf-nutri"
                            >
                            </Course>
                        </div>

                        <div className='courseSectionHome'>
                            <Course
                                image={carol}
                                topic="Saúde e Segurança do Trabalho NR 32 (Voltado para os Profissionais da Saúde)"
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
                                speaker="Tassia Pereira"
                                modality="Presencial"
                                url="https://doity.com.br/anhangueracf-arq"
                            >
                            </Course>
                        </div>
                        <div className='courseSectionHome'>
                            <Course
                                image={joice}
                                topic="Ferramentas Básicas para uma Gestão Eficaz"
                                timeAndDate="19h"
                                speaker="Joice Santos"
                                modality="Online"
                                url="https://doity.com.br/anhangueracf-enf-04"
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