
import check from '@/public/check.png'
import Image from 'next/image'
import { MarqueeDemoVertical } from './TheMarquee'
function TheMarqueeSection() {
  return (
    <div  className=" container px-4 flex md:flex-row flex-col-reverse gap-4  items-center justify-space-between py-3 ">
        <div  className=' flex flex-col gap-y-5'>
            <div>
              <h1 className=" font-medium  text-5xl ">World-class teams are upgrading to Welcome</h1>
              <p className=" text-white/60 mt-4">Companies are ditching legacy platforms for the ability to deliver an engaging experience at every level.</p>
            </div>
              <div>
                <h3 className=' text-2xl font-medium flex items-center gap-x-2 mt-5'>   
                    <Image src={check} alt="logo"  />
                      66%  <span className=" text-white/60">attendance rate</span>
                </h3>
                  <p className=" text-white/60">avg attendance for Welcome customers</p>
              </div>
        </div>

        <MarqueeDemoVertical/>
        

    </div>
  )
}

export default TheMarqueeSection