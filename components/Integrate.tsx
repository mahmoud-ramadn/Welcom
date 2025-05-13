
import Image from "next/image";
import integr from "@/public/integet.png";
import integr1 from "@/public/integ1 (1).png";  // renamed
import integr2 from "@/public/integ1 (2).png";  // renamed
import integr3 from "@/public/integ1 (3).png";  // renamed
import integr4 from "@/public/integ1 (4).png";  // renamed



function Integrate(){
  return (
      <div className=" bg-[#F5F5F5]  pb-10">
        <div className=" container flex items-center md:flex-row flex-col gap-20">
        <div className="  max-w-[300px] w-full">
                  <MarqueeDemoVertical />

        </div>
        <div>
                  <h1 className=" text-black lg:text-[121px] sm:text-[90px] text-5xl md:font-normal font-bold pb-2">Integrate</h1>
              <h1 className=" text-black md:text-[121px] text-5xl md:font-normal font-bold flex items-center   gap-2"><Image src={integr} alt='integr_image' className=" object-cover"/> your data</h1>
              <p className=" text-xl mt-5 text-black max-w-[505px] w-full pt-3">Leverage your existing marketing platforms and sync the data seamlessly</p>
        </div>
        </div>
      </div>
  )
}

export default Integrate



import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    {
        id:1,
        img: integr,
    },
    {

        id: 2,
        img: integr1,
    },
    {
        id: 3,
        img: integr2,
    },
    {
        id: 4,
        img: integr3,
    },
    {
        id: 5,
        img: integr4,
    },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
    img,
}: {
    img:string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-full md:max-w-[500px]  cursor-pointer overflow-hidden     flex  justify-center items-center  transition-all duration-300 "
            )}
        >
            <div className="  h-[224px] w-[160px] flex flex-row items-center  justify-center gap-3 bg-white  rounded-full  ">
                <Image src={img} alt="img_" className="  object-cover " />
                
            </div>
        </figure>
    );
};

 function MarqueeDemoVertical() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center   ">
            <div className="relative flex h-full w-full flex-row   items-center justify-center overflow-hidden">
                <Marquee
                    pauseOnHover
                    vertical
                    className="[--duration:15s] gap-4"
                >
                    {firstRow.map((review) => (
                        <ReviewCard key={review.id} img={review.img} />
                    ))}
                </Marquee>
                <Marquee
                    reverse
                    pauseOnHover
                    vertical
                    className="[--duration:15s] gap-4 "
                >
                    {secondRow.map((review) => (
                        <ReviewCard key={review.id} img={review.img}  />
                    ))}
                </Marquee>               
            </div>
        </div>
    );
}