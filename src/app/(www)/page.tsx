import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import ExperiencesSection from '@/components/sections/ExperiencesSection'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import SkillsSections from '@/components/sections/SkillsSections'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperiencesSection />
      <SkillsSections />
      <ContactSection />
    </>
  )
}
export default HomePage
