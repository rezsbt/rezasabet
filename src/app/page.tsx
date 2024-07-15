import AboutSection from '@/app/_components/AboutSection'
import ContactSection from '@/app/_components/ContactSection'
import ExperiencesSection from '@/app/_components/ExperiencesSection'
import HeroSection from '@/app/_components/HeroSection'
import SkillsSections from '@/app/_components/SkillsSections'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSections />
      <ExperiencesSection />
      <ContactSection />
    </>
  )
}
export default HomePage
