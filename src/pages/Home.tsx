import { HomeContainer, Banner } from "../styles";
import { Header } from '../components/Header/header';

import coord from "../assets/coord.png"

import { Course } from "../components/Course";
import { Cards } from '../components/Cards';
import { Footer } from "../components/Footer";

import { Swiper, SwiperSlide } from 'swiper/react'

export function Home() {
    const dataBanners = [
        {
            id: '1', 
            image: '/banners/volta-as-aulas.png', 
            url: 'https://login.kroton.com.br/'
        },
        {
            id: '2', 
            image: '/banners/rematricula.png', 
            url: ''
        }
    ]

    return(
        <HomeContainer>
            <Header />
            <div className="container">
                <Banner>
                    <Swiper 
                        className='containerSwiper'
                            slidesPerView={1}
                            pagination={{clickable: true}}
                            navigation
                            spaceBetween={50}
                            autoplay={{
                                delay: 3000,  // Tempo de atraso entre as transições (em ms)
                                disableOnInteraction: false,  // Continua o autoplay mesmo depois de interação do usuário
                            }}
                        >
                            {
                                dataBanners.map((item) => (
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
                </Banner>

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