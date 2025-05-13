"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import creat1 from "@/public/create1.png";
import creat2 from "@/public/create-2.png";
import creat3 from "@/public/create-3.png";
import arrow from "@/public/arrow.png"
import * as motion from "motion/react-client";

function HowItWork() {
    const steps = [
        {
            id: 1,
            title: "Create",
            description: "Cut through the yawns, grab your audience's attention, and turn passive attendees into active participants.",
            image: creat1,
            border: false
        },
        {
            id: 2,
            title: "Engage",
            description: "Cut through the yawns, grab your audience's attention, and turn passive attendees into active participants.",
            image: creat2,
            border: true
        },
        {
            id: 3,
            title: "Analyze",
            description: "Cut through the yawns, grab your audience's attention, and turn passive attendees into active participants.",
            image: creat3,
            border: false
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: 100, opacity: 0, scale: 0.95 },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="bg-white overflow-hidden py-12 md:py-24 lg:py-[144px]">
            <div className="container px-4">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col items-center md:flex-row gap-8 md:gap-12 lg:gap-16 pb-12 md:pb-20 border-b border-black/20"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-tight">
                        How it works
                    </h1>
                    <div className="md:w-1/2 space-y-6">
                        <p className="text-lg md:text-xl text-black/80 leading-relaxed">
                            Manage your experience from start to finish, from integrations to registration and from interactive stage elements to post-event data, it&apos;s all here.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button className="bg-violet-700 hover:bg-violet-800 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                                Learn more
                                <span className="ml-2">→</span>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Steps Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="space-y-0 md:space-y-8"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            variants={itemVariants}
                            className={`flex flex-col-reverse lg:flex-row-reverse items-center gap-8 py-10 md:py-12 ${step.border ? 'border-t border-b border-black/20' : ''}`}
                        >
                            <div className="lg:w-1/2 space-y-4 order-2 lg:order-1">
                                <p className="text-black/60 text-lg uppercase tracking-widest">Step {step.id}</p>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl text-black flex items-center gap-4">
                                    {step.title}
                                    <motion.div
                                        whileHover={{ rotate: 45 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Image
                                            src={arrow}
                                            alt="arrow_icon"
                                            width={48}
                                            height={48}
                                            className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                        />
                                    </motion.div>
                                </h2>
                                <p className="text-black/70 text-base md:text-lg leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="lg:w-1/2"
                            >
                                <Image
                                    src={step.image}
                                    alt={`${step.title.toLowerCase()}_image`}
                                    className="rounded-full object-cover w-full h-auto shadow-lg hover:shadow-xl transition-all duration-300"
                                    width={600}
                                    height={600}
                                    priority={index === 0}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default HowItWork