/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Sarah",
        username: "@sarah",
        body: "Absolutely stunning design and smooth animations!",
        img: "https://avatar.vercel.sh/sarah",
    },
    {
        name: "Mike",
        username: "@mike",
        body: "The user experience is phenomenal. Great job!",
        img: "https://avatar.vercel.sh/mike",
    },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-full md:max-w-[400px]  cursor-pointer overflow-hidden rounded-2xl border p-4 transition-all duration-300",
                // light styles
                "border-gray-200  hover:bg-gray-50 shadow-sm hover:shadow-md",
                // dark styles
                "dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700",
            )}
        >
            <div className="  w-full flex flex-row items-center gap-3">
                <img
                    className="rounded-full w-10 h-10 object-cover border-2 border-gray-100 dark:border-gray-600"
                    width="40"
                    height="40"
                    alt={`${name}'s avatar`}
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{username}</p>
                </div>
            </div>
            <blockquote className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                {body}
            </blockquote>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-100/20 to-transparent dark:via-gray-900/10" />
        </figure>
    );
};

export function MarqueeDemoVertical() {
    return (
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden border rounded-2xl  p-4  md:shadow-xl">
            <div className="relative flex h-full w-full flex-row   items-center justify-center overflow-hidden">
                <Marquee
                    pauseOnHover
                    vertical
                    className="[--duration:15s] gap-4"
                >
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee
                    reverse
                    pauseOnHover
                    vertical
                    className="[--duration:15s] gap-4 "
                >
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>

                {/* Gradient overlays */}
               
            </div>




            <div className="pointer-events-none absolute inset-x-0 top-0 w-full h-1/4 bg-gradient-to-b from-gray-900 dark:from-gray-900 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-900 dark:from-gray-900 to-transparent z-10" />
        </div>
    );
}