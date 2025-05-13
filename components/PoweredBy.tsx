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
            colSpan: "lg:col-span-4 md:col-span-2",
        },
        {
            id: 3,
            image: powerd3,
            title: "Audience Q&A",
            description: "Moderate audience questions and bring attendees on-stage.",
            colSpan: "lg:col-span-2 md:col-span-2",

        },
        {
            id: 4,
            image: powerd4,
            title: "Analytics Dashboard",
            description: "Real-time engagement metrics and audience insights.",
            colSpan: "lg:col-span-3 md:col-span-2",
        },
    ];

  return (
    <div className="  container bg-black  py-36">
        <div className=' md:leading-52  leading-20 mb-20'>
          <h3 className="  text-white text-4xl">Powered by</h3>
          <h1 className=" xl:text-[236px]   md:text-[150px]  text-[80px]    p-0">Welcome</h1>
          <h1 className=" xl:text-[236px]   md:text-[150px]  text-[80px]     text-end p-0">Studio</h1>
        </div>
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
             <div key={index} className=' pl-10 pt-[176px] relative md:col-span-1   bg-white/10'>
                    <div className=' md:p-8 p-6 max-w-[350px] w-full  absolute left-0 top-0  space-y-2'>
                        <h3 className='  text-lg'>{item.title}</h3>
                        <p className=' text-white/70 text-sm '>{item.description}</p>
                    </div>
        
                    <Image src={item.image} alt='powerd1' className="   w-full   h-full  shrink-0  " />
             </div>
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