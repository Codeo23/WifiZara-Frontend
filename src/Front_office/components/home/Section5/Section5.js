import React, { useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./section5.scss"


const images = [
    {id:1,src:"./../../../Assets/sourire1.png",nom:'Anjara danivet'},
    {id:2,src:"./../../../Assets/sourire2.png",nom:'Seheno Razafindrasoa'},
    {id:3,src:"https://assets.website-files.com/611d114cb3a54a7930597408/611d114cb3a54a2028597455_image-home-v1-testimonials-startup-x-template.jpg",nom:'Stephanot Sedraina'},
]

const Section5 = () => {
    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const slider = useRef(null)
    return (
        <div className='section5'>
            <div className='content-section5'>
                <div className="image">
                    <Slider {...settings} ref={slider}>

                        {[1,2,3,4,5].map((item) =>
                            <div key={`${item.id}`} className="box-image">
                                <img src="https://assets.website-files.com/611d114cb3a54a7930597408/611d114cb3a54a2028597455_image-home-v1-testimonials-startup-x-template.jpg" alt={item.name} />
                                <div className='box-text'>
                                    <p className="p1">
                                        “social network”
                                    </p>
                                    <p className='p2'>
                                        {item.name}
                                    </p>
                                    <p className='p3'>
                                        Un super fan de Marvel series
                                    </p>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>

                <div className='qlq-chiffres'>
                    <div className='title'  data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                        <h1 >QUELQUES CHIFFRES</h1>
                        <p>Nous avons des chiffres qui ont un impact</p>
                    </div>
                    <div className='chiffres'>
                        <div className='chiffre'>
                            <h1>60<span>%</span></h1>
                            <p>Diminuation de consommation par étudiant</p>
                        </div>
                        <div className='chiffre'>
                            <h1>80<span>%</span></h1>
                            <p>Elèves connectés par jour</p>
                        </div>
                        <div className='chiffre'>
                            <h1>40<span>%</span></h1>
                            <p>Taux d'accès favorable</p>
                        </div>
                        <div className='chiffre'>
                            <h1>25<span>%</span></h1>
                            <p>Augmentation des compétences des élèves</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5