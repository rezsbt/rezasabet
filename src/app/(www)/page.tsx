import AboutSection from '@/app/(www)/_components/AboutSection'
import ContactSection from '@/app/(www)/_components/ContactSection'
import ExperiencesSection from '@/app/(www)/_components/ExperiencesSection'
import HeroSection from '@/app/(www)/_components/HeroSection'
import SkillsSections from '@/app/(www)/_components/SkillsSections'

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
