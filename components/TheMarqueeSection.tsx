"use client"
import check from '@/public/check.png'
import Image from 'next/image'
import { MarqueeDemoVertical } from './TheMarquee'
import * as motion from "motion/react-client";


function TheMarqueeSection() {
  return (
    <div className="container px-4 flex md:flex-row flex-col-reverse gap-8 md:gap-12 items-center justify-between py-8 md:py-16">
      {/* Content Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          ease: [0.16, 0.77, 0.47, 0.97],
          delay: 0.2
        }}
        className="flex flex-col gap-6 md:gap-8 max-w-2xl"
      >
        <div>
          <motion.h1
            className="font-medium text-4xl md:text-5xl leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            World-class teams are upgrading to Welcome
          </motion.h1>
          <motion.p
            className="text-white/60 mt-4 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Companies are ditching legacy platforms for the ability to deliver an engaging experience at every level.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-medium flex items-center gap-x-3">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.8
              }}
            >
              <Image
                src={check}
                alt="check mark"
                width={24}
                height={24}
                className="min-w-6"
              />
            </motion.div>
            <span>66%</span>
            <span className="text-white/60">attendance rate</span>
          </h3>
          <p className="text-white/60 mt-1 pl-9">avg attendance for Welcome customers</p>
        </motion.div>
      </motion.div>

      {/* Marquee Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full md:w-auto"
      >
        <MarqueeDemoVertical />
      </motion.div>
    </div>
  );
}

export default TheMarqueeSection;