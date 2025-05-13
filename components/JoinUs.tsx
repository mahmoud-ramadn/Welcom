// import { Button } from "./ui/button"
// import join from "@/public/join_us.png";
// import Image from "next/image";

// function JoinUs() {
//   return (
//     <div className=" bg-black">
//         <div className=" container   md:py-36  py-16">
//             <div className=" flex items-end   justify-between mb-[96px]">
//                   <h1 className=" md:text-[114px] text-[50px]">Join us</h1>
//                   <Button className=" rounded-full py-6 px-5 border bg-transparent ">All events</Button>
//             </div>
//             <div className=" rounded-tr-[48px]  border-r border-t border-white pt-9 pr-9 flex items-center  justify-center md:flex-row flex-col gap-x-20">
//                 <div className=" max-w-[765px] w-full ">
//                       <p className=" text-xs  py-2 px-3 border rounded-full w-fit">December 21, 2022</p>
//                       <p className=" md:text-[48px] text-3xl my-4">Attention-Grabbing Marketing in a Noisy Market</p>
//                       <Button className=" bg-purple-600 p-6 rounded-full">
//                           Register
//                       </Button>
//                 </div>
//               <Image src={join} alt="join" className=" object-cover aspect-square shrink-0 "/>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default JoinUs





import join from "@/public/join_us.png";
import Image from "next/image";
import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";

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
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: "backOut" }
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.3 }
    }
};

function JoinUs() {
    return (
        <div className="bg-black overflow-hidden">
            <div className="container md:py-36 py-16">
                <motion.div
                    className="flex items-end justify-between mb-[96px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h1
                        className="md:text-[114px] text-[50px] "
                        variants={itemVariants}
                    >
                        Join us
                    </motion.h1>
                    <motion.div variants={itemVariants}>
                        <motion.button
                            className="rounded-full md:py-6 py-3 md:px-10 px-4  flex items-center md:gap-x-5 border border-white/20  backdrop-blur-sm group transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            All events
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="rounded-tr-[48px] border-r border-t border-white/20 md:pt-9 pt-3 md:pr-9 pr-3 flex items-center justify-center md:flex-row flex-col gap-x-20 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, ease: "easeOut" }
                        }
                    }}
                >
                    <div className="md:max-w-[765px]  bg w-full md:p-6">
                        <motion.p
                            className="text-xs py-2 px-3 border border-white/20 rounded-full w-fit backdrop-blur-sm"
                            variants={itemVariants}
                        >
                            December 21, 2022
                        </motion.p>
                        <motion.p
                            className="md:text-[48px] w-full text-3xl my-6 font-medium leading-tight"
                            variants={itemVariants}
                        >
                            Attention-Grabbing Marketing in a Noisy Market
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <motion.button
                                className="bg-gradient-to-r from-purple-600 to-pink-600 md:w-fit  w-full p-6 px-10 rounded-full  flex items-center justify-center gap-x-4 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group"
                                whileHover={{ scale: 1.05 }}
                            >
                                Register Now
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </motion.div>
                    </div>

                    <motion.div
                        className="relative overflow-hidden rounded-2xl aspect-square shrink-0 "
                        variants={imageVariants}
                    >
                        <Image
                            src={join}
                            alt="join"
                            className="object-cover "
                            placeholder="blur"
                        />
            
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default JoinUs