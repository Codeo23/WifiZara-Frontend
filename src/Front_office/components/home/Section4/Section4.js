
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./section4.scss"

const Opinion=[
    {
        auteur:'Marihasina',
        descri:"Lorem ipsum dolor sit amet consectetur adipiscing elit Consectetur tortor nunc aliquam consectetur semper augue at lorem  ipsum dolor sit amet consectetur adipiscing elit Consectetur tortor nunc aliquam consectetur semper augue at met consectetur ",
        pdp:'https://avatars.githubusercontent.com/u/80751503?s=400&u=6a0d04a90a1089e5ad180560b65371d56c0a20a8&v=4'
    },
    {
        auteur:'Manohisafidy',
        descri:"Lorem ipsum dolor sit amet consectetur adipiscing elit Consectetur tortor nunc aliquam consectetur semper augue at lorem  ipsum dolor sit amet consectetur adipiscing elit Consectetur tortor nunc aliquam consectetur semper augue at met consectetur ",
        pdp:'https://avatars.githubusercontent.com/u/93115585?v=4'
    },
    {
        auteur:'Aina',
        descri:"Lorem ipsum dolor sit amet consectetur adipiscing elit Consectetur tortor nunc aliquam consectetur semper augue at lorem  ipsum dolor sit amet consectetur adipiscing elit Consectetur tortor nunc aliquam consectetur semper augue at met consectetur ",
        pdp:'https://avatars.githubusercontent.com/u/82655694?v=4'
    }
]


const Section4 = () => {
    const settings = {
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
    
            <div className="section4">
                <p>
                    Gérer des 2000 étudiants n'est pas du tout facile,
                    malgré les atouts.
                </p>
                <h2>Voici quelques retour de nos étudiants:</h2>
            <div className="slide">
                <div className="slide-box">
                    <Slider {...settings}>
                        {Opinion.map(op => (
                            <div className="slide-card">
                                <div className="slide-paragraph">{op.descri}</div>
                                <div className="slide-avatar">
                                    <div className="avatar">
                                        <img alt={op.auteur} src={op.pdp}/>
                                        <p>{op.auteur}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            </div>

    )
}

export default Section4