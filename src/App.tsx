import { useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { GetInvolvedSection } from './components/GetInvolvedSection'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ImpactSection } from './components/ImpactSection'
import { ProgramsSection } from './components/ProgramsSection'
import { ScrollToTop } from './components/ScrollToTop'
import { StatsSection } from './components/StatsSection'
import { TestimonialsSection } from './components/TestimonialsSection'
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
          <AboutSection />
        </ViewportReveal>
        <ViewportReveal>
          <ProgramsSection />
        </ViewportReveal>
        <ViewportReveal>
          <GetInvolvedSection onSelectHelpIntent={setSelectedHelpIntent} />
        </ViewportReveal>
        <ViewportReveal>
          <ImpactSection />
        </ViewportReveal>
        <ViewportReveal>
          <TestimonialsSection />
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
