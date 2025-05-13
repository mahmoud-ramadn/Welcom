"use client"
import ex1 from "@/public/ex1.png";
import ex2 from "@/public/ex2.png";
import ex4 from "@/public/ex-3.png";
import ex5 from "@/public/ex-5.png";
import ex3 from "@/public/ex-4.png";
import Image from "next/image";
import * as motion from "motion/react-client";

function TheExperience() {
    const gridData = [
        {
            id: 1,
            image: ex1,
            title: "Interactive overlays",
            description: "Add custom branded graphics that lay over your live video to intro speakers, emphasize key points, and display clickable CTAs.",
            colSpan: "lg:col-span-6 md:col-span-4",
            delay: 0.1
        },
        {
            id: 2,
            image: ex3,
            title: "Live Polling",
            description: "Embed polls directly on stage and watch the results populate in real-time.",
            colSpan: "lg:col-span-4 md:col-span-2",
            delay: 0.2
        },
        {
            id: 3,
            image: ex2,
            title: "Audience Q&A",
            description: "Moderate audience questions and bring attendees on-stage.",
            colSpan: "lg:col-span-2 md:col-span-2",
            delay: 0.3
        },
        {
            id: 4,
            image: ex4,
            title: "Analytics Dashboard",
            description: "Real-time engagement metrics and audience insights.",
            colSpan: "lg:col-span-3 md:col-span-2",
            delay: 0.4
        },
        {
            id: 5,
            image: ex5,
            title: "Networking Tools",
            description: "Facilitate connections between attendees with smart matching.",
            colSpan: "lg:col-span-3 md:col-span-2",
            delay: 0.5
        },
    ];

    return (
        <section className="bg-white pt-16 pb-24 md:pt-24 md:pb-36 flex flex-col items-center gap-12 md:gap-16">
            <div className="container px-4">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-8 md:mb-12 text-center md:text-left"
                >
                    <p className="text-4xl md:text-6xl lg:text-7xl text-black leading-tight">
                        An unmatched attendee
                    </p>
                    <motion.h1
                        className="text-black text-6xl md:text-[99px] lg:text-[180px] xl:text-[240px] 2xl:text-[284px] leading-[0.9] font-bold tracking-tighter"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Experience
                    </motion.h1>
                </motion.div>

                {/* Grid Section */}
                <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-4 md:gap-6 mt-16 md:mt-32">
                    {gridData.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            className={`relative group overflow-hidden h-fit max-h-[480px] rounded-xl hover:shadow-xl transition-shadow duration-300 ${item.colSpan}`}
                        >
                            <div className="h-fit w-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    width={800}
                                    height={600}
                                    quality={90}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 text-white space-y-2">
                                <motion.h2
                                    className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {item.title}
                                </motion.h2>
                                <p className="text-sm md:text-base opacity-90 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.button
                    className="py-5 px-8 rounded-full bg-black text-white hover:bg-gray-800 mx-auto text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    See all features →
                </motion.button>
            </motion.div>
        </section>
    );
}

export default TheExperience;