// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProductInfoSection from './components/ProductInfoSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import PaymentPage from './components/PaymentPage';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import PrivacyPage from './components/PrivacyPage';
import DisclaimerPage from './components/DisclaimerPage';
import TermsPage from './components/TermsPage'; // Add this line

function HomePage() {
  React.useEffect(() => {
  document.title = 'Prodentim: #1 Oral Probiotic Supplement | Official Website';
}, []);


  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ProductInfoSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<PaymentPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/terms" element={<TermsPage />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
}


// Redeploy trigger


export default App;
