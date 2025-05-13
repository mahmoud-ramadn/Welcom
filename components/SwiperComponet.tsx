// components/SwiperComponent.js
// components/SwiperComponent.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  A11y, Autoplay } from 'swiper/modules';
import avater  from "@/public/avater.png";
import  logo from "@/public/integ1 (1).png";
import { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';

export default function SwiperComponent() {
    const swiperRef = useRef(null);

    return (
        <div className="relative  ">
            <div className='   flex  justify-end gap-x-4'>

            <button
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className=" bg-black/30 hover:bg-black/50 text-white p-3 rounded-full "
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <button
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className=" bg-black/30 hover:bg-black/50 text-white p-3 rounded-full "
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
            </div>

            <Swiper
                ref={swiperRef}
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={2.5}
                centeredSlides={false}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 2.2,
                        spaceBetween: 40
                    },
                    1700: {
                        slidesPerView: 2.2,
                        spaceBetween: 40
                    }
                }}
                className=' pl-10'
            >
                {[1, 2, 3, 4, 5].map((item) => (
                    <SwiperSlide key={item} className=" md:pt-10 pt-5 md:pr-10 pr-5 w-full mt-[79px] relative overflow-hidden rounded-tr-[48px] border-r border-t border-white/20   ">
                        <div className="">  
                          <p className=' md:text-2xl text-sm text-white'>&quot;We chose Welcome because it’s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement.&quot;</p>
                            <div className=' flex items-start gap-x-6 mt-10'>
                            <Image src={avater} alt='avater' className=' shrink-0 object-cover'/>
                            <div >
                                    <h3  className='  text-lg '>Ally Masi</h3>
                                    <p className='  text-white/60 text-sm'>Director of Industries Events Marketing
                                    Salesforce</p>
                            </div>
                        </div>
                        <Image src={logo} alt='log' className=' shrink-0 object-cover mt-8'/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}