import { Container } from './styles';
import { Header } from "../../components/Header/header";
import { Section } from "../../components/Section";
import { Course } from "../../components/Course";
import { Footer } from '../../components/Footer';

import faixa from "../../assets/faixa-site.png"  

import { Swiper, SwiperSlide } from 'swiper/react'

export function Courses() {

    const dataDay23 = [
        {
            id: '2', image: '/cources/tea.png', url: 'https://doity.com.br/anhangueracf-edf'
        },
        {
            id: '3', image: 'cources/material-biologico.png', url: 'https://doity.com.br/anhangueracf-enf'
        },
        {
            id: '4', image: '/cources/gestao-estresse.png', url: 'https://doity.com.br/anhangueracf-ges'
        },
    ]

    const dataDay24 = [
        {
            id: '5', image: '/cources/inteligencia-artificial.png', url: 'https://doity.com.br/anhangueracf-ads'
        },
        {
            id: '6', image: '/cources/libras02.png', url: 'https://doity.com.br/anhangueracf-ped02'
        },
        {
            id: '7', image: '/cources/encontro-formativo.png', url: 'https://doity.com.br/anhangueracf-ser'
        },
        {
            id: '8', image: '/cources/suporte-basico.png', url: 'https://doity.com.br/anhangueracf-enfermagem'
        },
        {
            id: '9', image: '/cources/mesa-redonda.png', url: 'https://doity.com.br/anhangueracf-efermagem02'
        },

    ]

    const dataDay25 = [
        {
            id: '11', image: '/cources/carnivora.png', url: 'https://doity.com.br/anhangueracf-nutri'
        },
        {
            id: '12', image: '/cources/nr32.png', url: 'https://doity.com.br/anhangueracf-eng'
        },
        {
            id: '13', image: '/cources/acessibilidade.png', url: 'https://doity.com.br/anhangueracf-arq'
        },
        {
            id: '14', image: '/cources/ferramentas-basicas.png', url: 'https://doity.com.br/anhangueracf-enf-04'
        },
    ]

    return(
        <Container>
            <Header/>
            
            <img className='imgCourses' src={faixa} alt="" />
            <main>

                <Section title="> Dia 02 - 23 de Julho - Terça-feira:">

                    <Swiper 
                    className='container'
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        navigation
                    >
                        {
                            dataDay23.map((item) => (
                                <SwiperSlide 
                                    className='slide-item'
                                    key={item.id}
                                >
                                    <Course
                                        image={item.image}
                                        url={item.url}
                                    >
                                    </Course>
                                </SwiperSlide>
                            ))
                        }
 
                    </Swiper>

                </Section>

                <Section title="> Dia 03 - 24 de Julho - Quarta-feira:">
                    <Swiper 
                        className='container'
                            slidesPerView={1}
                            pagination={{clickable: true}}
                            navigation
                        >
                            {
                                dataDay24.map((item) => (
                                    <SwiperSlide 
                                        className='slide-item'
                                        key={item.id}
                                    >
                                        <Course
                                            image={item.image}
                                            url={item.url}
                                        >
                                        </Course>
                                    </SwiperSlide>
                                ))
                            }
    
                        </Swiper>
                </Section>

                <Section title="> Dia 04 - 25 de Julho - Quinta-feira:">
                <Swiper 
                    className='container'
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        navigation
                    >
                        {
                            dataDay25.map((item) => (
                                <SwiperSlide 
                                    className='slide-item'
                                    key={item.id}
                                >
                                    <Course
                                        image={item.image}
                                        url={item.url}
                                    >
                                    </Course>
                                </SwiperSlide>
                            ))
                        }
 
                    </Swiper>
                </Section>
            </main>

            <Footer />
        </Container>
    )
}