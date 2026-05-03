'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from "next/link";
import banner1 from "@/assets/Hero.jpg";
import banner3 from "@/assets/Hero-3.jpg";
import banner2 from "@/assets/Hero-4.webp";

const Banner = () => {
    const slides = [banner1, banner2, banner3];

    return (
        <div className='min-h-[80vh]'>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="min-h-[80vh]">
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="hero min-h-[80vh]"
                            style={{
                                backgroundImage: `url(${slide.src})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            <div className="hero-overlay"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold animate__animated animate__fadeInDown">
                                        Discover Your Perfect Aesthetic
                                    </h1>
                                    <p className="mb-5 animate__animated animate__fadeInUp">
                                        Step into a world of stunning tile designs where creativity meets craftsmanship. Discover elegant textures, vibrant colors, and timeless patterns that bring life to your interiors. Your perfect aesthetic starts here.
                                    </p>
                                    <Link href={'/main/allTiles'}>
                                        <button className="btn bg-linear-to-r from-[#384959] to-[#88BDF2] text-white border-none animate__animated animate__zoomIn">
                                            Browse now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;