import ar1 from '@/public/articl1 (1).png';
import ar2 from '@/public/articl1 (2).png';
import ar3 from '@/public/articl1 (3).png';
import Image from 'next/image';
import { Button } from './ui/button';

import { StaticImageData } from 'next/image';

interface Article {
    id: number;
    title: string;
    image: StaticImageData;
    category?: string;
    readTime?: string;
}

function Articles() {
    const articlesContent: Article[] = [
        {
            id: 1,
            title: '8 Creative Ways to Repurpose Your Webinar Content',
            image: ar1,
            category: 'Inspiration',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'The Ultimate Guide to Engaging Virtual Events',
            image: ar2,
            category: 'Guide',
            readTime: '7 min read'
        },
        {
            id: 3,
            title: 'Maximizing ROI from Your Digital Content',
            image: ar3,
            category: 'Strategy',
            readTime: '6 min read'
        },
    ];

    return (
        <section className="md:py-20 py-10 bg-white">
            <div className="container flex flex-col items-center justify-center">
                <h2 className="text-black text-4xl md:text-5xl text-center font-bold mb-12">
                    Recent Articles
                </h2>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-10 w-full">
                    {articlesContent.map((article) => (
                        <article
                            key={article.id}
                            className="col-span-1 group hover:shadow-lg transition-shadow duration-300 rounded-tr-[48px] overflow-hidden"
                        >
                            <div className="relative h-60 md:h-80 w-full">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover w-full rounded-tr-[48px] group-hover:scale-105 transition-transform duration-300"
                                   
                                />
                            </div>

                            <div className="p-6">
                                <Button
                                    variant="outline"
                                    className="bg-transparent rounded-full border text-sm text-gray-600 py-1 px-4 mb-3 hover:bg-gray-50"
                                >
                                    {article.category}
                                </Button>

                                <h3 className="text-black text-xl font-semibold mb-2 line-clamp-2">
                                    {article.title}
                                </h3>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                                    <Button
                                        variant="link"
                                        className="text-[#5B6CFF] text-lg font-bold p-0 hover:no-underline hover:opacity-80"
                                    >
                                        Read →
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <Button
                    className="bg-[#5B6CFF] hover:bg-[#4a5ae8] py-6 px-8 rounded-full mx-auto mt-14 text-lg font-medium"
                >
                    Read the Blog
                </Button>
            </div>
        </section>
    );
}

export default Articles;