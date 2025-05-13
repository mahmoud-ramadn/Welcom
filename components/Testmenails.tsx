"use client"
import SwiperComponent from "./SwiperComponet"
import * as motion from "motion/react-client";

function Testimonials() {
    return (
        <section className="relative bg-[url('/swiper.png')] bg-no-repeat bg-cover bg-center py-16 md:py-36 overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent z-0" />

            <div className="container px-4 relative z-10">
                {/* Animated Header */}
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold text-white leading-[0.9] tracking-tighter mb-12 md:mb-20 max-w-[400px]"
                >
                    Loved & trusted
                </motion.h1>

                {/* Swiper Component */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <SwiperComponent />
                </motion.div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent z-0" />
        </section>
    )
}

export default Testimonials