import AboutSection from '@/app/(www)/_sections/AboutSection'
import ContactSection from '@/app/(www)/_sections/ContactSection'
import ExperiencesSection from '@/app/(www)/_sections/ExperiencesSection'
import HeroSection from '@/app/(www)/_sections/HeroSection'
import SkillsSections from '@/app/(www)/_sections/SkillsSections'

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
