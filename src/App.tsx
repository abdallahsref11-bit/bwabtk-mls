import { useState } from 'react';
import { IntroSplashScreen } from './components/IntroSplashScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LincolnFeaturedCard } from './components/LincolnFeaturedCard';
import { ServicesSection } from './components/ServicesSection';
import { UniversitiesGrid } from './components/UniversitiesGrid';
import { TuitionCalculator } from './components/TuitionCalculator';
import { OfficeLocationCard } from './components/OfficeLocationCard';
import { ContactModal } from './components/ContactModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { University } from './types';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedUniversityForModal, setSelectedUniversityForModal] = useState<string | undefined>(undefined);

  const handleSelectUniversity = (uni: University) => {
    setSelectedUniversityForModal(uni.nameAr);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Intro Entrance Screen (Disappears automatically or on manual skip) */}
      <IntroSplashScreen />

      {/* Top Navbar Navigation */}
      <Navbar onOpenConsultation={() => {
        setSelectedUniversityForModal(undefined);
        setIsConsultationModalOpen(true);
      }} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with 3D Spline Scene & Spotlight */}
        <HeroSection onOpenConsultation={() => setIsConsultationModalOpen(true)} />

        {/* Featured Offer: Lincoln University 3-Year AI/Cybersecurity @ $2400/yr */}
        <LincolnFeaturedCard onOpenConsultation={() => setIsConsultationModalOpen(true)} />

        {/* Services Section */}
        <ServicesSection onOpenConsultation={() => setIsConsultationModalOpen(true)} />

        {/* University Finder / Directory */}
        <UniversitiesGrid onSelectUniversity={handleSelectUniversity} />

        {/* Tuition & Living Cost Calculator */}
        <TuitionCalculator />

        {/* Agency Office Location Details */}
        <OfficeLocationCard />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />

      {/* Consultation Modal */}
      <ContactModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        preselectedUniversityName={selectedUniversityForModal}
      />

    </div>
  );
}
