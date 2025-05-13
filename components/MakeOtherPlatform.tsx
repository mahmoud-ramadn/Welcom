import Image from "next/image";
import section from "@/public/section.png";
import * as motion from "motion/react-client";

function MakeOtherPlatform() {
    return (
        <section className="relative py-16 md:py-24 lg:py-0 overflow-hidden">
            <div className="container px-4 md:px-6 relative h-full">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10 md:max-w-[600px] lg:max-w-[650px] absolute lg:top-1/2 top-24 lg:-translate-y-1/2 p-6 md:p-8 lg:p-0 bg-black/30 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-xl lg:rounded-none"
                >
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] leading-tight font-medium text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        &ldquo;Makes other platforms look like the 1990&rsquo;s&rdquo;
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl my-6 md:my-8 lg:my-10 text-white/80"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        — Nate Skinner, CMO at Onfido
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.button
                            className="bg-transparent hover:bg-white/10 h-14 text-white border-white rounded-full px-8 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            whileTap={{ scale: 0.95 }}
                        >
                            Read customer stories →
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Background Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <Image
                        src={section}
                        alt="Business platform interface"
                        className="object-cover w-full h-[600px] md:h-[800px] lg:h-[900px]"
                        width={1920}
                        height={1080}
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/20 lg:to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}

export default MakeOtherPlatform;