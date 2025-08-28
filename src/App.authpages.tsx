import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { useAuthPages } from './hooks/useAuthPages';
import { AuthPageType } from './authPagesMockData';

function AuthPagesApp() {
  const {
    currentPage,
    navigateToLogin,
    navigateToRegister,
    navigateToHome,
    handleAuthSuccess,
    navigate
  } = useAuthPages(AuthPageType.HOME);

  // Render based on current page
  if (currentPage === AuthPageType.LOGIN) {
    return (
      <LoginPage 
        onNavigate={navigate}
        onAuthSuccess={handleAuthSuccess}
      />
    );
  }

  if (currentPage === AuthPageType.REGISTER) {
    return (
      <RegisterPage 
        onNavigate={navigate}
        onAuthSuccess={handleAuthSuccess}
      />
    );
  }

  // Homepage
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header onGetStartedClick={navigateToRegister} />
      <main>
        <Hero onGetStartedClick={navigateToRegister} />
        <Features />
        <TechStack />
        <CTA onGetStartedClick={navigateToRegister} />
      </main>
      <Footer />
    </div>
  );
}

export default AuthPagesApp;