import Articles from "@/components/Articles"
import DriveRevelvant from "@/components/DriveRevelvant"
import ExepricenWelcom from "@/components/ExepricenWelcom"
import HowItWork from "@/components/HowItWork"
import Integrate from "@/components/Integrate"
import JoinUs from "@/components/JoinUs"
import MakeOtherPlatform from "@/components/MakeOtherPlatform"
import PoweredBy from "@/components/PoweredBy"
import Signup from "@/components/Signup"
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
      <Articles/>
      <JoinUs/>
      <Signup/>
      <ExepricenWelcom/>
    </div>
  )
}

export default page