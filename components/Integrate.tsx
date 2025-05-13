"use client"
import Image, { StaticImageData } from "next/image";
import integr from "@/public/integet.png";
import integr1 from "@/public/integ1 (1).png";
import integr2 from "@/public/integ1 (2).png";
import integr3 from "@/public/integ1 (3).png";
import integr4 from "@/public/integ1 (4).png";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

interface Review {
    id: number;
    img: StaticImageData;
    alt?: string;
}

const reviews: Review[] = [
    {
        id: 1,
        img: integr,
        alt: "Integration Platform 1"
    },
    {
        id: 2,
        img: integr1,
        alt: "Integration Platform 2"
    },
    {
        id: 3,
        img: integr2,
        alt: "Integration Platform 3"
    },
    {
        id: 4,
        img: integr3,
        alt: "Integration Platform 4"
    },
    {
        id: 5,
        img: integr4,
        alt: "Integration Platform 5"
    },
];

interface ReviewCardProps {
    img: StaticImageData;
    alt?: string;
}

const ReviewCard = ({ img, alt = "integration logo" }: ReviewCardProps) => {
    return (
        <motion.figure
            className={cn(
                "relative h-full w-full md:max-w-[500px] cursor-pointer overflow-hidden flex justify-center items-center transition-all duration-300"
            )}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
        >
            <div className="h-[224px] w-[160px] flex flex-row items-center justify-center gap-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Image
                    src={img}
                    alt={alt}
                    className="object-contain w-20 h-20"
                    width={80}
                    height={80}
                    quality={100}
                />
            </div>
        </motion.figure>
    );
};

function MarqueeDemoVertical() {
    const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
    const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center">
            <div className="relative flex h-full w-full flex-row items-center justify-center overflow-hidden">
                <Marquee
                    pauseOnHover
                    vertical
                    className="[--duration:15s] gap-6"
                >
                    {firstRow.map((review) => (
                        <ReviewCard key={review.id} img={review.img} alt={review.alt} />
                    ))}
                </Marquee>
                <Marquee
                    reverse
                    pauseOnHover
                    vertical
                    className="[--duration:15s] gap-6"
                >
                    {secondRow.map((review) => (
                        <ReviewCard key={review.id} img={review.img} alt={review.alt} />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

function Integrate() {
    return (
        <section className="bg-[#F5F5F5] py-16 md:py-24">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Marquee Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:max-w-[300px] lg:max-w-[400px]"
                    >
                        <MarqueeDemoVertical />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-black text-5xl sm:text-7xl lg:text-[100px] xl:text-[121px] font-bold md:font-normal leading-[0.9] tracking-tighter pb-4">
                            Integrate
                        </h1>
                        <div className="flex items-center gap-4">
                            <motion.h1
                                className="text-black text-5xl sm:text-7xl lg:text-[100px] xl:text-[121px] font-bold md:font-normal leading-[0.9] tracking-tighter"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                your data
                            </motion.h1>
                            <motion.div
                                whileHover={{ rotate: 15 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src={integr}
                                    alt="Integration icon"
                                    className="object-contain w-16 h-16 lg:w-24 lg:h-24"
                                    width={96}
                                    height={96}
                                    quality={100}
                                />
                            </motion.div>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-lg md:text-xl mt-6 text-black max-w-[505px] leading-relaxed"
                        >
                            Leverage your existing marketing platforms and sync the data seamlessly
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Integrate;