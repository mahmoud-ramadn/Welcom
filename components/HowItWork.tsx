 "use client"
import Image from "next/image"
import { Button } from "./ui/button"
import creat1 from "@/public/create1.png";
import creat2 from "@/public/create-2.png";
import creat3 from "@/public/create-3.png";
import arrow from "@/public/arrow.png"
import * as motion from "motion/react-client";


function HowItWork() {
    return (
        <div className="bg-white overflow-hidden py-12 md:py-24 lg:py-[144px]">
            <div className="container">
                <div
                    className="flex flex-col items-center md:flex-row gap-8 md:gap-12 lg:gap-16 pb-12 md:pb-20 border-b border-black/20"
                >
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-black leading-tight">
                        How it works
                    </h1>
                    <div className="md:w-1/2 space-y-6">
                        <p className="text-lg md:text-xl  rounded-full text-black/80 leading-relaxed">
                            Manage your experience from start to finish, from integrations to registration and from interactive stage elements to post-event data, it&apos;s all here.
                        </p>
                        <Button className="bg-violet-700 hover:bg-violet-800 rounded-full px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105">
                            Learn more
                        </Button>
                    </div>
                </div>

                <div className="space-y-0 md:space-y-8">
                    <div
                        className="flex flex-col-reverse lg:flex-row-reverse items-center gap-8 py-10 md:py-12 "
                    >
                        <div className="lg:w-1/2 space-y-4 order-2 lg:order-1">
                            <p className="text-black/60 text-lg uppercase ">Step 1</p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl  text-black flex items-center gap-4">
                                Create
                                <Image
                                    src={arrow}
                                    alt="arrow_icon"
                                    className="w-12 h-12 object-contain"
                                />
                            </h2>
                            <p className="text-black/70 text-base md:text-lg leading-relaxed">
                                Cut through the yawns, grab your audience&apos;s attention, and turn passive attendees into active participants.
                            </p>
                        </div>
                        <motion.div initial={{ x: 100, opacity: 0, scale: 0.8 }} whileInView={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: 'easeInOut' }}  className="lg:w-1/2 cursor-pointer  ">
                            <Image
                                src={creat1}
                                alt="create_1"
                                className=" rounded-full object-cover w-full h-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
                                priority
                            />
                        </motion.div>
                    </div>

                    <div
                        className="flex flex-col-reverse lg:flex-row-reverse items-center gap-8 py-10 md:py-12 border-t border-b border-black/20"
                    >
                        <div className="lg:w-1/2 space-y-4 order-2 lg:order-1">
                            <p className="text-black/60 text-lg uppercase tracking-widest">Step 2</p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl  text-black flex items-center gap-4">
                                Engage
                                <Image
                                    src={arrow}
                                    alt="arrow_icon"
                                    className="w-12 h-12 object-contain "
                                />
                            </h2>
                            <p className="text-black/70 text-base md:text-lg leading-relaxed">
                                Cut through the yawns, grab your audience&apos;s attention, and turn passive attendees into active participants.
                            </p>
                        </div>
                        <motion.div  initial={{x:100,opacity:0,scale:0.8}} whileInView={{x:0,opacity:1,scale:1}} transition={{duration:1.5,ease:'easeInOut'}} className="lg:w-1/2 ">
                            <Image
                                src={creat2}
                                alt="create_2"
                                className=" rounded-full object-cover w-full h-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                        </motion.div>
                    </div>
                    <div
                        className="flex flex-col-reverse lg:flex-row-reverse items-center gap-8 py-10 md:py-12 "
                    >
                        <div className="lg:w-1/2 space-y-4 order-2 lg:order-1">
                            <p className="text-black/60 text-lg uppercase tracking-widest">Step 3</p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl  text-black flex items-center gap-4">
                                Analyze
                                <Image
                                    src={arrow}
                                    alt="arrow_icon"
                                    className="w-12 h-12 object-contain"
                                />
                            </h2>
                            <p className="text-black/70 text-base md:text-lg leading-relaxed">
                                Cut through the yawns, grab your audience&apos;s attention, and turn passive attendees into active participants.
                            </p>
                        </div>
                        <motion.div className="lg:w-1/2 " initial={{ x: 100, opacity: 0, scale: 0.8 }} whileInView={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 2, ease: 'easeInOut' }}>
                            <Image
                                src={creat3}
                                alt="create_3"
                                className=" rounded-full object-cover w-full h-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default HowItWork;
