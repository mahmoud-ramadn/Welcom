import { MarqueeDemo } from "./HorzentalMarquee";
import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 0.77, 0.47, 0.97]
        }
    }
};

function ExperienceWelcome() {
    return (
        <div className="md:py-[144px] py-[75px] bg-white overflow-hidden">
            <div className="container">
                <motion.div
                    className="max-w-[782px] w-full mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h1
                        className="md:text-[128px] text-[80px] text-black leading-[0.9] font-bold tracking-tight mb-6"
                        variants={itemVariants}
                    >
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Experience
                        </span>{" "}
                        Welcome
                    </motion.h1>

                    <motion.p
                        className="max-w-[682px] w-full py-8 text-2xl text-black/60 leading-normal"
                        variants={itemVariants}
                    >
                        A webinar platform designed for marketers to host jaw-dropping experiences that drive revenue.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <motion.button
                            className="py-4 px-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.4)"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Request a demo
                            <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-20"
                >
                    <MarqueeDemo />
                </motion.div>
            </div>
        </div>
    )
}

export default ExperienceWelcome;