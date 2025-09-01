import { Meteors } from "@/components/magicui/meteors";
import HeroSection from "./landing/herosection";
import { Particles } from "@/components/magicui/particles";

export default function Home() {
  return (
    <>
      <div className="absolute -z-10 top-0 overflow-hidden h-screen w-full">
        <Particles className=" h-screen!" />
        <Meteors />
      </div>
      <HeroSection />
    </>
  );
}
