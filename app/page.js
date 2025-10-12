import Image from "next/image";
import { HeroSection } from "../components/homepage/Hero";
import { AboutMeSection } from "../components/homepage/About";
import { ProjectSection } from "../components/homepage/Project";
import { getSEO } from "./action/seo";

// Generate SEO metadata for homepage
export const metadata = getSEO("/");

export default function Home() {
  return (
   <div>
  <HeroSection/>
      <AboutMeSection/>
      <ProjectSection/>
   </div>
  );
}
