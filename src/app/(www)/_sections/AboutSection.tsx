import SectionTitle from '@/components/shared/SectionTitle'
import appData from 'Public/data/appData.json'

const AboutSection = () => {
  return (
    <section className='bg-background-100 py-header' id='about'>
      <div className='container'>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-medium'>{appData.aboutSection.mainContent}</p>
      </div>
    </section>
  )
}

export default AboutSection
