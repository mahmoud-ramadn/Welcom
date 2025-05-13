import ex1 from "@/public/ex1.png";
import ex2 from "@/public/ex2.png";
import ex4 from "@/public/ex-3.png";
import ex5 from "@/public/ex-5.png";
import ex3 from "@/public/ex-4.png";
import Image from "next/image";
import { Button } from "./ui/button";

function TheExperience() {
    const gridData = [
        {
            id: 1,
            image: ex1,
            title: "Interactive overlays",
            description: "Add custom branded graphics that lay over your live video to intro speakers, emphasize key points, and display clickable CTAs.",
            colSpan: "lg:col-span-6 md:col-span-4",
        },
        {
            id: 2,
            image: ex3,
            title: "Live Polling",
            description: "Embed polls directly on stage and watch the results populate in real-time.",
            colSpan: "lg:col-span-4 md:col-span-2",
        },
        {
            id: 3,
            image: ex2,
            title: "Audience Q&A",
            description: "Moderate audience questions and bring attendees on-stage.",
            colSpan: "lg:col-span-2 md:col-span-2",

        },
        {
            id: 4,
            image: ex4,
            title: "Analytics Dashboard",
            description: "Real-time engagement metrics and audience insights.",
            colSpan: "lg:col-span-3 md:col-span-2",
        },
        {
            id: 5,
            image: ex5,
            title: "Networking Tools",
            description: "Facilitate connections between attendees with smart matching.",
            colSpan: "lg:col-span-3 md:col-span-2",
        },
    ];

    return (
        <section className=" bg-white  pt-24 pb-36 md:pt-[101px] md:pb-[144px]  flex flex-col items-center gap-[64px]">
            <div className="container ">
                <div className="mb-6 md:mb-0">
                    <p className="text-5xl md:text-7xl text-black leading-tight">
                        An unmatched attendee
                    </p>
                    <h1 className="text-black text-7xl md:text-[99px] lg:text-[200px] 2xl:text-[284px] leading-[0.9] font-bold tracking-tighter">
                        Experience
                    </h1>
                </div>

                <div className="grid md:mt-[200px] mt-[100px]  lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-4  ">
                    {gridData.map((item) => (
                        <div
                            key={item.id}
                            className={`relative  overflow-hidden h-fit  max-h-[480px]   rounded-xl hover:shadow-lg ${item.colSpan}`}
                        >
                            <div className="   h-fit w-full  ">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className=" object-contain w-full  h-fit "
                                    
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                            </div>

                            <div className="absolute top-0 left-0 right-0 p-6 md:p-8 z-20 text-white space-y-2">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                                    {item.title}
                                </h2>
                                <p className="text-sm md:text-base opacity-90 line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Button className=" py-6 px-5 rounded-full bg-white text-black hover:bg-red-200 mx-auto "> 
                See all features
            </Button>

        </section>
    );
}

export default TheExperience; 