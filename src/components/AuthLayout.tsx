import React from 'react';
import { AuthPageType } from '../authPagesMockData';

// Back Arrow Icon
const BackArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12,19 5,12 12,5"/>
  </svg>
);

interface AuthLayoutProps {
  children: React.ReactNode;
  pageType: AuthPageType;
  onNavigate: (page: AuthPageType) => void;
  showBackButton?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  pageType,
  onNavigate,
  showBackButton = true
}) => {
  return (
    <div className="auth-page" style={{
      minHeight: '100vh',
      background: 'var(--gradient-hero)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'float 6s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '50%',
        filter: 'blur(30px)',
        animation: 'float 4s ease-in-out infinite reverse'
      }} />

      {/* Header */}
      <header style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 'var(--spacing-lg) var(--spacing-xl)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10
      }}>
        {/* Back Button */}
        {showBackButton && (
          <button
            onClick={() => onNavigate(AuthPageType.HOME)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-xs)',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateX(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <BackArrowIcon />
            Back to Homepage
          </button>
        )}

        {/* Brand Logo */}
        <div style={{
          fontSize: '1.25rem',
          fontWeight: '800',
          fontFamily: 'var(--font-display)',
          color: 'white',
          marginLeft: showBackButton ? 0 : 'auto',
          marginRight: 'auto'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Zero-Trust
          </span>{' '}
          Data Engine
        </div>

        <div style={{ width: showBackButton ? '140px' : '0' }} />
      </header>

      {/* Main Content */}
      <main style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 'var(--spacing-xl)',
        paddingTop: '120px'
      }}>
        <div className="auth-page-enter">
          {children}
        </div>
      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          header {
            padding: var(--spacing-md) !important;
            flex-direction: column;
            gap: var(--spacing-md);
            align-items: flex-start;
          }
          
          main {
            padding: var(--spacing-md) !important;
            padding-top: 140px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthLayout;