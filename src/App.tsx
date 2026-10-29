import { useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { DonationTeaser } from './components/DonationTeaser'
import { DonationsSection } from './components/DonationsSection'
import { Footer } from './components/Footer'
import { GetInvolvedSection } from './components/GetInvolvedSection'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProgramsSection } from './components/ProgramsSection'
import { ScrollToTop } from './components/ScrollToTop'
import { StatsSection } from './components/StatsSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { VideoSection } from './components/VideoSection'
import { ViewportReveal } from './components/ViewportReveal'

export default function App() {
  const [selectedHelpIntent, setSelectedHelpIntent] = useState('')

  return (
    <>
      <Header />

      <main>
        <ViewportReveal>
          <HeroSection />
        </ViewportReveal>
        <ViewportReveal>
          <StatsSection />
        </ViewportReveal>
        <ViewportReveal>
          <DonationTeaser />
        </ViewportReveal>
        <ViewportReveal>
          <AboutSection />
        </ViewportReveal>
        <ViewportReveal>
          <ProgramsSection />
        </ViewportReveal>
        <ViewportReveal>
          <GetInvolvedSection onSelectHelpIntent={setSelectedHelpIntent} />
        </ViewportReveal>
        <ViewportReveal>
          <VideoSection />
        </ViewportReveal>
        <ViewportReveal>
          <TestimonialsSection />
        </ViewportReveal>
        <ViewportReveal>
          <DonationsSection />
        </ViewportReveal>
        <ViewportReveal>
          <ContactSection prefilledHelpIntent={selectedHelpIntent} />
        </ViewportReveal>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
