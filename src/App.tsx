import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { useAuth } from './hooks/useAuth';

function App() {
  const { modalState, openRegisterModal, closeModal, switchModal, isModalOpen } = useAuth();

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header onGetStartedClick={openRegisterModal} />
      <main>
        <Hero onGetStartedClick={openRegisterModal} />
        <Features />
        <TechStack />
        <CTA onGetStartedClick={openRegisterModal} />
      </main>
      <Footer />
      
      <AuthModal
        isOpen={isModalOpen}
        modalType={modalState}
        onClose={closeModal}
        onSwitchModal={switchModal}
      />
    </div>
  );
}

export default App;