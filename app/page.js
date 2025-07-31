import Image from "next/image";
import { HeroSection } from "../components/homepage/Hero";
import { AboutMeSection } from "../components/homepage/About";
import { ProjectSection } from "../components/homepage/Project";

export default function Home() {
  return (
   <div>
  <HeroSection/>
      <AboutMeSection/>
      <ProjectSection/>
   </div>
  );
}
