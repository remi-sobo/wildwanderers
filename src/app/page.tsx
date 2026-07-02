import Hero from "@/components/home/Hero";
import WhyNow from "@/components/home/WhyNow";
import WhatItIs from "@/components/home/WhatItIs";
import Approach from "@/components/home/Approach";
import Animals from "@/components/home/Animals";
import ForDads from "@/components/home/ForDads";
import Chapters from "@/components/home/Chapters";
import AgesStages from "@/components/home/AgesStages";
import MeetGabe from "@/components/home/MeetGabe";
import CtaBand from "@/components/home/CtaBand";

/**
 * The homepage tells one story, top to bottom: the promise (Hero), the reason
 * (WhyNow), the offer said plainly (WhatItIs), the method (Approach), the
 * system (Animals), the two audiences (ForDads), the movement (Chapters), the
 * fit (AgesStages), the founder (MeetGabe), the ask (CtaBand).
 */
export default function Home() {
  return (
    <>
      <Hero />
      <WhyNow />
      <WhatItIs />
      <Approach />
      <Animals />
      <ForDads />
      <Chapters />
      <AgesStages />
      <MeetGabe />
      <CtaBand />
    </>
  );
}
