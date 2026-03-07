import HeroSection from "@/components/home/hero/HeroSection";
import XServiceSection from "@/components/home/services/XServiceSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ResumeSection from "@/components/resume/ResumeSection";
import SkillSection from "@/components/skills/SkillSection";




export default function Home() {
  return (
    <>
      <HeroSection />
      <XServiceSection />  
      <ResumeSection />   
      <ProjectSection />
      <SkillSection />
    </>
  );
}
  