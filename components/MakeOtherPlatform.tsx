import Image from "next/image";
import section from "@/public/section.png";
import { Button } from "./ui/button";

function MakeOtherPlatform() {
    return (
        <section className="relative   md:py-0  py-20 ">
            <div className="container  md:pt-0  pt-48    px-0 relative  ">
                <div className=" z-10   md:max-w-[600px] absolute md:top-1/2 -top-[50px]  md:-translate-y-1/2 md:p-0  ">
                    <h1 className="text-4xl sm:text-5xl md:text-[56px] leading-tight  text-white">
                        &ldquo;Makes other platforms look like the 1990&rsquo;s&rdquo;
                    </h1>
                    <p className="text-lg md:text-xl my-6 md:my-10 text-white/80">
                        — Nate Skinner, CMO at Onfido
                    </p>
                    <Button
                        variant="outline"
                        className="bg-transparent hover:bg-white/10 h-14 text-white border-white rounded-full px-8 text-lg transition-colors duration-300"
                    >
                        Read customer stories
                    </Button>
                </div>

                <Image
                    src={section}
                    alt="Business platform interface "
                    className=" object-cover"
                    priority
                />
            </div>
        </section>
    );
}

export default MakeOtherPlatform;