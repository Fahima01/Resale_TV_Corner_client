import React from 'react';
import banner from '../../../assets/LED_tv/banner.png'
import banner2 from '../../../assets/LED_tv/banner-2.png'
import banner3 from '../../../assets/LED_tv/banner-3.png'



const Banner = () => {
    return (
        <div style={{ background: 'rgba(0, 0, 0, 0.5)' }} className="hero h-auto ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="carousel w-full h-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={banner2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle ">❮</a>
                            <a href="#slide2" className="btn btn-circle ">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={banner} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={banner3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='text-sky-400 font-semibold mb-4 text-lg'>Biggest Bazar of </p>
                    <h1 className="text-7xl font-bold " style={{ color: '#FF74B1', lineHeight: '90px' }}>Buy and Sell <br></br> Used Tv !</h1>
                    <p className="py-6">Ready to sell some of your old tech? We've found the best services to use for getting you the most cash.</p>
                    {/* <PrimaryButton>Getting Started</PrimaryButton> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;