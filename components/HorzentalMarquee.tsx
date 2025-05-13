/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Star } from "lucide-react";
import * as motion from "motion/react-client";


const reviews = [
    {
        name: "Jack Wilson",
        username: "@jack",
        body: "This product completely transformed my workflow. The attention to detail is incredible!",
        img: "https://avatar.vercel.sh/jack",
        rating: 5,
    },
    {
        name: "Jill Thompson",
        username: "@jill",
        body: "I was skeptical at first, but after using it for a week I'm completely sold. Game changer!",
        img: "https://avatar.vercel.sh/jill",
        rating: 4,
    },
    {
        name: "John Davis",
        username: "@john",
        body: "The customer support alone is worth it. Product is excellent but the team behind it is even better.",
        img: "https://avatar.vercel.sh/john",
        rating: 5,
    },
    {
        name: "Jane Smith",
        username: "@jane",
        body: "Finally a solution that actually works as advertised. Can't recommend it enough to my colleagues.",
        img: "https://avatar.vercel.sh/jane",
        rating: 5,
    },
    {
        name: "Jenny Johnson",
        username: "@jenny",
        body: "The learning curve was minimal and the payoff was immediate. Worth every penny.",
        img: "https://avatar.vercel.sh/jenny",
        rating: 4,
    },
    {
        name: "James Miller",
        username: "@james",
        body: "After trying several alternatives, this is by far the most polished and complete solution.",
        img: "https://avatar.vercel.sh/james",
        rating: 5,
    },
    {
        name: "Sarah Williams",
        username: "@sarah",
        body: "The regular updates with new features show the team is truly committed to excellence.",
        img: "https://avatar.vercel.sh/sarah",
        rating: 5,
    },
    {
        name: "Michael Brown",
        username: "@michael",
        body: "Integrated seamlessly with my existing tools. The API documentation is fantastic.",
        img: "https://avatar.vercel.sh/michael",
        rating: 4,
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
    rating,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
    rating: number;
}) => {
    return (
        <motion.figure
            className={cn(
                "relative h-full w-full min-w-[300px] max-w-[400px] cursor-pointer overflow-hidden  rounded-full border  px-10 py-5 shadow-lg",
                "border-gray-200  hover:bg-gray-50 transition-all duration-300",
                "dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            )}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="flex flex-col h-full">
                <div className="flex flex-row items-center gap-3">
                    <img
                        className="rounded-full w-10 h-10 border-2 border-primary/30"
                        width="40"
                        height="40"
                        alt={name}
                        src={img}
                    />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-semibold dark:text-white">
                            {name}
                        </figcaption>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{username}</p>
                    </div>
                </div>

                <div className="flex gap-1 mt-3 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                        />
                    ))}
                </div>

                <blockquote className="text-sm text-gray-600 dark:text-gray-300 flex-grow">{body}&quot;
                </blockquote>

            </div>
        </motion.figure>
    );
};

export function MarqueeDemo() {
    return (
        <section className="relative flex w-full flex-col items-center py-20 justify-center overflow-hidden  dark:from-gray-900 dark:to-gray-950">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:25s] gap-4 py-4">
                    {firstRow.map((review) => (
                        <ReviewCard key={`${review.username}-1`} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:25s] gap-4 py-4">
                    {secondRow.map((review) => (
                        <ReviewCard key={`${review.username}-2`} {...review} />
                    ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-gray-900"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-gray-900"></div>
            </div>
        </section>
    );
}