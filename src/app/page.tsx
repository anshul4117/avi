import ContactUs from '@/components/main/ContactUs'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import Timeline from '@/components/main/Timeline'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'
import CertificationsSection from '@/components/main/Certifications'
import { AnalyticsDebug } from '@/components/analytics/AnalyticsDebug'
import InteractiveWrapper from '@/components/main/InteractiveWrapper'

export const metadata: Metadata = {
  title: 'Aviral Verma - Network Engineer & Aspiring Data Scientist Portfolio',
  description: 'Welcome to the portfolio of Aviral Verma. Aspiring Network Engineer with hands-on internship experience in routing, switching, CCNA, and AWS cloud, with a career focus on Python and Data Science.',
  alternates: {
    canonical: 'https://aviral-verma.vercel.app',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen" >
      {/* Hidden SEO content for better indexing */}
      <div className="sr-only">
        <h1>Aviral Verma - Network Engineer and Aspiring Data Scientist Portfolio</h1>
        <p>
          Welcome to my professional portfolio. I am a network engineer and cloud specialist
          with expertise in CCNA routing & switching, AWS, Python, and data analytics.
          Browse my projects, skills, and professional experience.
        </p>
      </div>

      <InteractiveWrapper>
        <Hero />
        <Skills />
        <Timeline />
        <CertificationsSection />
        <Projects />
        <ContactUs />
        <Toaster position="bottom-right" />
      </InteractiveWrapper>
    </div>
  )
}
