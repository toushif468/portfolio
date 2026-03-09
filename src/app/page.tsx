import ContactSection from "@/components/contacts/ContactSection";
import HeroSection from "@/components/home/hero/HeroSection";
import XServiceSection from "@/components/services/XServiceSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ResumeSection from "@/components/resume/ResumeSection";
import SkillSection from "@/components/skills/SkillSection";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import AnimationLayout from "../../layouts/AnimationLayout";
import { Toaster } from "react-hot-toast";




export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <XServiceSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
      <TestimonialSection />
      <ContactSection />
      <Toaster />
    </AnimationLayout>

  );
}
