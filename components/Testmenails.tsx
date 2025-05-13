"use client"
import SwiperComponent from "./SwiperComponet"


function Testmenails() {
    return (
        <div className="bg-[url(/swiper.png)] bg-no-repeat bg-cover  md:py-[144px] py-[70px] ">
            <div className=" container">
            <h1 className=" text-[100px]  max-w-[400px]  w-full  leading-32 ">Loved & trusted</h1>

            <SwiperComponent/>
            </div>
        </div>
    )
}

export default Testmenails