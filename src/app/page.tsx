import HeroSection from "@/components/home/hero/HeroSection";
import XServiceSection from "@/components/home/services/XServiceSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ResumeSection from "@/components/resume/ResumeSection";




export default function Home() {
  return (
    <>
      <HeroSection />
      <XServiceSection />  
      <ResumeSection />   
      <ProjectSection /> 
    </>
  );
}
  