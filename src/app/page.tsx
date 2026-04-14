import ContactSection from "@/components/contacts/ContactSection";
import HeroSection from "@/components/home/hero/HeroSection";
import XServiceSection from "@/components/services/XServiceSection";
import ResumeSection from "@/components/resume/ResumeSection";
import SkillSection from "@/components/skills/SkillSection"; 
import AnimationLayout from "../../layouts/AnimationLayout";
import { Toaster } from "react-hot-toast";
import ProjectSection from "@/components/projects/ProjectSection";
import AwardSection from "@/components/awards/AwardSection";
import PublicationSection from "@/components/publication/PublicationSection";
import TechnologySection from "@/components/technologies/TechnologySection";



// import TestimonialSection from "@/components/testimonials/TestimonialSection";




export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <XServiceSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
      {/* <TestimonialSection /> */}
      <TechnologySection />
      <AwardSection />
      <PublicationSection />
      <ContactSection />
      <Toaster />
    </AnimationLayout>

  );
}
