import hero from "@/public/hero.webp";
import Image from "next/image";
import heroHolder from "@/public/holderImag.png";
import Hero from "@/public/633b9211f3a23a857f2a4434_home-hero-blur-p-1600.webp.png";
import * as motion from "motion/react-client";

function TheHero() {
    return (
        <section className="relative px-4 my-24 md:my-32 lg:my-40 overflow-hidden">
            {/* Background Blur */}
            <motion.div
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${Hero.src})`, filter: "blur(20px)" }}
                aria-hidden="true"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

            {/* Text Content */}
            <div className="text-center mx-auto max-w-4xl relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl xl:text-[103px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6 leading-tight"
                >
                    Captivate & Convert
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-300/80 mb-10 md:mb-14 leading-relaxed"
                >
                    A webinar platform designed for marketers to host jaw-dropping experiences that drive revenue.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 mb-16 md:mb-20"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 py-3 px-6 md:py-4 md:px-8 text-white font-medium shadow-lg hover:shadow-purple-500/40 text-lg"
                        aria-label="Request a demo"
                    >
                        Request Demo
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full border-2 border-purple-400 hover:bg-purple-900/30 transition-all duration-300 py-3 px-6 md:py-4 md:px-8 text-white font-medium flex items-center justify-center gap-2 text-lg"
                        aria-label="Learn how it works"
                    >
                        <span>How it works</span>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            whileHover={{ x: 5 }}
                        >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </motion.svg>
                    </motion.button>
                </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="relative max-w-6xl mx-auto"
            >
                <div className="relative flex items-center justify-center">
                    <Image
                        src={hero}
                        alt="Webinar platform interface"
                        className="object-contain z-30 hover:scale-[1.02] transition-transform duration-500"
                        priority
                        quality={90}
                        width={1200}
                        height={800}
                    />
                    <Image
                        src={heroHolder}
                        alt=""
                        className="absolute left-1/2 -translate-x-1/2 z-20"
                        aria-hidden="true"
                        width={1200}
                        height={800}
                    />
                </div>

                {/* Bottom Glow Effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-10 left-0 w-full h-32 bg-gradient-to-t from-purple-900/50 to-transparent blur-2xl z-10"
                    aria-hidden="true"
                />
            </motion.div>
        </section>
    );
}

export default TheHero;