import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-scroll';

const PortfolioSlider = () => {

    const data = [
        { title: "Colorful Art Work", subtitle: "See Details", image: "/src/assets/portfolio_3.jpeg" },
        { title: "Colorful Art Work", subtitle: "See Details", image: "/src/assets/portfolio_1.jpeg" },
        { title: "Colorful Art Work", subtitle: "See Details", image: "/src/assets/portfolio_0.jpg" },
        { title: "Colorful Art Work", subtitle: "See Details", image: "/src/assets/portfolio_2.jpeg" },
        { title: "Colorful Art Work", subtitle: "See Details", image: "/src/assets/portfolio_3.jpeg" },
        { title: "Colorful Art Work", subtitle: "See Details", image: "/src/assets/portfolio_1.jpeg" },
        { title: "Colorful Art Work", subtitle: "See Details", image: "/src/assets/portfolio_0.jpg" },
        { title: "Colorful Art Work", subtitle: "See Details", image: "/src/assets/portfolio_2.jpeg" },
        { title: "Colorful Art Work", subtitle: "See Details", image: "/src/assets/portfolio_3.jpeg" },
        { title: "Colorful Art Work", subtitle: "See Details", image: "/src/assets/portfolio_1.jpeg" },
        { title: "Colorful Art Work", subtitle: "See Details", image: "/src/assets/portfolio_0.jpg" },
        { title: "Colorful Art Work", subtitle: "See Details", image: "/src/assets/portfolio_2.jpeg" }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings} className='lg:-mx-64 slick-slider'>
            {
                data.map((item, index) => <Link key={index} to="/" className='cs-portfolio cs-bg relative'>
                    <div className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl slick-slide slick-active'></div>
                    <div>
                        <img src={item.image} alt="" className='rounded-2xl slick-slide'/>
                    </div>
                    <div className='absolute top-0 left-0 hover:bg-orange/80 w-full h-full flex items-center justify-center rounded-2xl cursor-pointer'>
                        <div className='text-center'>
                            <h2 className='text-2xl font-semibold mb-1'>{item.title}</h2>
                            <p className='cs-portfolio_substitle'>{item.subtitle}</p>
                        </div> 
                    </div>
                </Link>)
            }
        </Slider>
    )
}

export default PortfolioSlider
