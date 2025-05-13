"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import span from '@/public/span.png';

const Counter = ({ target, duration = 2000, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(1);
    const counterRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;
                        const startTime = performance.now();

                        const animateCount = (currentTime) => {
                            const elapsedTime = currentTime - startTime;
                            const progress = Math.min(elapsedTime / duration, 1);
                            const currentCount = Math.floor(progress * target);

                            setCount(currentCount);

                            if (progress < 1) {
                                requestAnimationFrame(animateCount);
                            } else {
                                setCount(target);
                            }
                        };

                        requestAnimationFrame(animateCount);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [target, duration]);

    return (
        <span ref={counterRef}>
            {prefix}{count}{suffix}
        </span>
    );
};

function DriveRelevant() {
    return (
        <div className="bg-[#F5F5F5] py-20 md:py-36 lg:py-44 xl:py-[144px] overflow-hidden">
            <div className="container flex flex-col lg:flex-row gap-y-5 ">
                <div className="lg:w-2/3 w-full flex flex-col gap-x-5 justify-center">
                    <h1 className="text-4xl md:text-8xl lg:text-[121px]  text-black">
                        Drive
                    </h1>
                    <div className="  text-4xl md:text-[100px] lg:text-[121px]  text-black  mt-6  flex  items-center md:gap-x-4">
                        <Image
                            src={span}
                            alt="span_image"
                            className="object-cover shrink-0 "
                        />
                        Revenue
                    </div>
                </div>

                {/* Right side - Stats */}
                <div className="lg:w-1/3 w-full ">
                    <div className="md:py-6  py-3 text-center  ">
                        <h1 className="text-4xl md:text-5xl lg:text-[59px]  text-black ">
                            +<Counter target={87} duration={1500} suffix="%" />
                        </h1>
                        <p className="text-base md:text-lg text-black pt-2 ">
                            increased attendee engagement <br/>at Bitwise
                        </p>
                    </div>

                    <div className="md:py-6  py-3  border-y border-black/10  text-center  ">
                        <h1 className="text-4xl md:text-5xl lg:text-[59px]  text-black ">
                            $<Counter target={1.7} duration={2000} suffix="M" />
                        </h1>
                        <p className="text-base md:text-lg text-black pt-2">
                            pipeline generated <br/>at Everbridge
                        </p>
                    </div>

                    <div className="md:py-6 py-3 text-center ">
                        <h1 className="text-4xl md:text-5xl lg:text-[59px]  text-black">
                            <Counter target={58} duration={1800} suffix="%" />
                        </h1>
                        <p className="text-base md:text-lg text-black pt-2">
                            attendee conversion rate <br/>at Interfolio
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DriveRelevant;