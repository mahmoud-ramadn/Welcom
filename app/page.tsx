import DriveRevelvant from "@/components/DriveRevelvant"
import HowItWork from "@/components/HowItWork"
import Integrate from "@/components/Integrate"
import MakeOtherPlatform from "@/components/MakeOtherPlatform"
import PoweredBy from "@/components/PoweredBy"
import Testmenails from "@/components/Testmenails"
import TheEndLess from "@/components/TheEndLess"
import TheExperince from "@/components/TheExperince"
import TheHero from "@/components/TheHero"
import TheMarqueeSection from "@/components/TheMarqueeSection"

function page() {
  return (
    <div className=" text-white overflow-hidden  ">
      <TheHero />
      <TheMarqueeSection/>
      <TheExperince/>
      <MakeOtherPlatform/>
      <PoweredBy/>
      <DriveRevelvant/>
      <HowItWork/>
      <Integrate/>
      <Testmenails/>
      <TheEndLess/>
    </div>
  )
}

export default page