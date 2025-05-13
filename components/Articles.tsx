import ar1 from '@/public/articl1 (1).png';
import ar2 from '@/public/articl1 (2).png';
import ar3 from '@/public/articl1 (3).png';
import Image from 'next/image';
import { Button } from './ui/button';
import { StaticImageData } from 'next/image';
import * as motion from "motion/react-client";


interface Article {
    id: number;
    title: string;
    image: StaticImageData;
    category?: string;
    readTime?: string;
    delay?: number;
}

function Articles() {
    const articlesContent: Article[] = [
        {
            id: 1,
            title: '8 Creative Ways to Repurpose Your Webinar Content',
            image: ar1,
            category: 'Inspiration',
            readTime: '5 min read',
            delay: 0.1
        },
        {
            id: 2,
            title: 'The Ultimate Guide to Engaging Virtual Events',
            image: ar2,
            category: 'Guide',
            readTime: '7 min read',
            delay: 0.2
        },
        {
            id: 3,
            title: 'Maximizing ROI from Your Digital Content',
            image: ar3,
            category: 'Strategy',
            readTime: '6 min read',
            delay: 0.3
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Recent Articles
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover insights and strategies from our latest publications
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8 lg:gap-12"
                >
                    {articlesContent.map((article) => (
                        <motion.article
                            key={article.id}
                            variants={itemVariants}
                            custom={article.delay}
                            whileHover={{ y: -5 }}
                            className="group rounded-tr-[48px] overflow-hidden  hover:shadow-md transition-all duration-300"
                        >
                            <div className="relative h-64 md:h-72 w-full overflow-hidden rounded-tr-xl">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover w-full transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={article.id === 1}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>

                            <div className="p-6 ">
                                <Button
                                    variant="outline"
                                    className="mb-4 rounded-full px-4 py-1 text-xs font-medium border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                                >
                                    {article.category}
                                </Button>

                                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                    {article.title}
                                </h3>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-sm text-gray-500">{article.readTime}</span>
                                    <Button
                                        variant="link"
                                        className="text-[#5B6CFF] font-medium p-0 hover:no-underline hover:text-[#4a5ae8] group-hover:underline"
                                    >
                                        Read more
                                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </Button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.button
                        className="bg-[#5B6CFF] hover:bg-[#4a5ae8] text-white py-4 px-8 rounded-full text-base font-medium shadow-md hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Articles
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

export default Articles;