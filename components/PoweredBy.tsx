import powerd1 from '@/public/powerd1.png'
import powerd2 from '@/public/powerd2.png'
import powerd3 from '@/public/powerd3.png'
import powerd4 from '@/public/powerd4.png'
import Image from 'next/image'
import { Button } from './ui/button'
import * as motion from "motion/react-client";



function PoweredBy() {
  const gridData = [
    {
      id: 2,
      image: powerd2,
      title: "Live Polling",
      description: "Embed polls directly on stage and watch the results populate in real-time.",
      colSpan: "md:col-span-1",
      delay: 0.2
    },
    {
      id: 3,
      image: powerd3,
      title: "Audience Q&A",
      description: "Moderate audience questions and bring attendees on-stage.",
      colSpan: "md:col-span-1",
      delay: 0.3
    },
    {
      id: 4,
      image: powerd4,
      title: "Analytics Dashboard",
      description: "Real-time engagement metrics and audience insights.",
      colSpan: "md:col-span-1",
      delay: 0.4
    },
  ];
  return (
    <div className="  container bg-black  py-36">
      <motion.div initial={{ scale: 0.9, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }} className=' md:leading-52  leading-20 mb-20'>
          <h3 className="  text-white text-4xl">Powered by</h3>
        <motion.h1 initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }} className=" xl:text-[236px]   md:text-[150px]  text-[80px]    p-0">Welcome</motion.h1>
        <motion.h1 initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }} className=" xl:text-[236px]   md:text-[150px]  text-[80px]     text-end p-0">Studio</motion.h1>
        </motion.div>

          <div  className="grid md:grid-cols-3 gap-6   grid-cols-1">
        <motion.div  initial={{ scale: 0.5, opacity: 0 ,y:-200
         }} whileInView={{
          scale: 1, opacity: 1, y: 0
        }} transition={{ duration: 1 }} className='  md:col-span-3 relative  z-30 md:pt-[53px] pt-[176px]  bg-gradient-to-tl  to-[#96B7CD] from-[#E68D83] '>
                <div className=' md:p-8 p-6 max-w-[350px] w-full  absolute left-0 top-0  space-y-2'>
                      <h3 className='  text-lg'>Drag-n-drop Agenda Builder</h3>
                      <p className=' text-white/70 text-sm '>Quickly rearrange your webinar’s sequence of actions and instantly generate an agenda that auto-updates as you move actions around.</p>
                </div>
                  <Image src={powerd1} alt='powerd1' className=" object-contain   h-fit  float-end" />
            </motion.div>

            {gridData.map((item,index)=>(
              <motion.div key={index} initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }} className=' pl-10 pt-[176px] relative md:col-span-1   bg-white/10'>
                    <div className=' md:p-8 p-6 max-w-[350px] w-full  absolute left-0 top-0  space-y-2'>
                        <h3 className='  text-lg'>{item.title}</h3>
                        <p className=' text-white/70 text-sm '>{item.description}</p>
                    </div>
        
                    <Image src={item.image} alt='powerd1' className="   w-full   h-full  shrink-0  " />
             </motion.div>
            ))}
          </div>
          <div className='  flex justify-center  mt-20 '>
              <Button className=" py-6 px-5 rounded-full   bg-transparent border border-white mx-auto ">
                  See all features
              </Button>
          </div>
    </div>
  )
}

export default PoweredBy













// "use client"
// import powerd1 from '@/public/powerd1.png'
// import powerd2 from '@/public/powerd2.png'
// import powerd3 from '@/public/powerd3.png'
// import powerd4 from '@/public/powerd4.png'
// import Image from 'next/image'
// import { Button } from './ui/button'
// import * as motion from "motion/react-client";

// function PoweredBy() {
//   const gridData = [
//     {
//       id: 2,
//       image: powerd2,
//       title: "Live Polling",
//       description: "Embed polls directly on stage and watch the results populate in real-time.",
//       colSpan: "md:col-span-1",
//       delay: 0.2
//     },
//     {
//       id: 3,
//       image: powerd3,
//       title: "Audience Q&A",
//       description: "Moderate audience questions and bring attendees on-stage.",
//       colSpan: "md:col-span-1",
//       delay: 0.3
//     },
//     {
//       id: 4,
//       image: powerd4,
//       title: "Analytics Dashboard",
//       description: "Real-time engagement metrics and audience insights.",
//       colSpan: "md:col-span-1",
//       delay: 0.4
//     },
//   ];

//   return (
//     <section className="container bg-black py-24 md:py-36 px-4">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="mb-16 md:mb-20"
//       >
//         <h3 className="text-white text-3xl md:text-4xl mb-2">Powered by</h3>
//         <motion.h1
//           className="xl:text-[180px] lg:text-[140px] md:text-[120px] text-[70px] font-bold leading-[0.8] tracking-tighter"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           Welcome
//         </motion.h1>
//         <motion.h1
//           className="xl:text-[180px] lg:text-[140px] md:text-[120px] text-[70px] font-bold leading-[0.8] tracking-tighter text-end"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           Studio
//         </motion.h1>
//       </motion.div>

//       {/* Grid Section */}
//       <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
//         {/* Featured Card */}
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0, y: 50 }}
//           whileInView={{ scale: 1, opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, type: "spring" }}
//           className="md:col-span-3 relative z-30 bg-gradient-to-tl to-[#96B7CD] from-[#E68D83] rounded-xl overflow-hidden"
//         >
//           <div className="md:p-8 p-6 max-w-[350px] w-full absolute left-0 top-0 space-y-3 z-10">
//             <h3 className="text-xl font-medium">Drag-n-drop Agenda Builder</h3>
//             <p className="text-white/80 text-sm md:text-base">
//               Quickly rearrange your webinar's sequence of actions and instantly generate an agenda that auto-updates as you move actions around.
//             </p>
//           </div>
//           <Image
//             src={powerd1}
//             alt="Drag-n-drop Agenda Builder"
//             className="object-contain h-full w-full ml-auto"
//             width={800}
//             height={600}
//             quality={90}
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
//         </motion.div>

//         {/* Secondary Cards */}
//         {gridData.map((item) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: item.delay }}
//             className={`${item.colSpan} relative bg-white/10 rounded-xl overflow-hidden group hover:bg-white/15 transition-colors duration-300`}
//           >
//             <div className="p-6 md:p-8 space-y-3 absolute left-0 top-0 z-10">
//               <h3 className="text-lg md:text-xl font-medium">{item.title}</h3>
//               <p className="text-white/70 text-sm md:text-base">
//                 {item.description}
//               </p>
//             </div>
//             <Image
//               src={item.image}
//               alt={item.title}
//               className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
//               width={600}
//               height={400}
//               quality={90}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//           </motion.div>
//         ))}
//       </div>

//       {/* CTA Button */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         viewport={{ once: true }}
//         className="flex justify-center mt-16 md:mt-20"
//       >
//         <Button
//           className="py-5 px-8 rounded-full bg-transparent border border-white hover:bg-white hover:text-black text-lg font-medium transition-colors duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           See all features
//         </Button>
//       </motion.div>
//     </section>
//   )
// }

// export default PoweredBy