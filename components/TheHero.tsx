import hero from "@/public/hero.webp";
import Image from "next/image";
import heroHolder from "@/public/holderImag.png";
import Hero from "@/public/633b9211f3a23a857f2a4434_home-hero-blur-p-1600.webp.png";
import * as motion from "motion/react-client";

function TheHero() {
    return (
        <section className=" px-4 relative my-32">
            {/* Text Content */}
            <div className="text-center  mx-auto">
                <h1 className="text-5xl  lg:text-[103px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                    Captivate & Convert
                </h1>
                <p className="text-base md:text-2xl text-gray-300/80 mb-10 leading-relaxed">
                    A webinar platform designed for marketers to host jaw-dropping experiences that drive revenue.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <button
                        className="rounded-full bg-purple-700 hover:bg-purple-800 transition-all duration-300 py-3 px-6 md:py-4 md:px-8 text-white font-medium shadow-lg hover:shadow-purple-500/30"
                        aria-label="Request a demo"
                    >
                        Request Demo
                    </button>
                    <button
                        className="rounded-full border border-purple-500 hover:bg-purple-900/30 transition-all duration-300 py-3 px-6 md:py-4 md:px-8 text-white font-medium flex items-center justify-center gap-2"
                        aria-label="Learn how it works"
                    >
                        <span>How it works</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <motion.div
            initial={{y:200,opacity:0}}
            animate={{
                y:0,
                opacity:1
            }}
            transition={{duration:1,ease:"easeInOut",delay:0.2}}
                className="absolute -z-10  left-0 bottom-0  w-full  h-full bg-cover bg-center blur-sm"
                style={{ backgroundImage: `url(${Hero.src})` }}
                aria-hidden="true"
            />

            <div className="relative">

                <div className="relative flex items-center justify-center">
                    <Image
                        src={hero}
                        alt="Webinar platform interface"
                        className="object-contain z-30   transition-transform duration-500"
                        priority
                    />
                    <Image
                        src={heroHolder}
                        alt=""
                        className="absolute  left-1/2 -translate-x-1/2 "
                        aria-hidden="true"
                    />
                </div>

                <div className="  bg-black/50 blur-3xl   -bottom-11  left-0 w-full absolute h-[100px]">
                </div>
            </div>
        </section>
    );
}

export default TheHero;