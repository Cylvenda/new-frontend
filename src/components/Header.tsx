import React, { useState } from 'react';

interface HeaderProps {
  onGetStartedClick?: () => void;
}

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const Header: React.FC<HeaderProps> = ({ onGetStartedClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 102, 255, 0.1)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '1.5rem',
          fontWeight: '800',
          fontFamily: 'var(--font-display)',
          color: 'var(--color-text-primary)'
        }}>
          <span className="gradient-text">Zero-Trust</span> Data Engine
        </div>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }} className="desktop-nav">
          <a href="#docs" style={{
            textDecoration: 'none',
            color: 'var(--color-text-primary)',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.2s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--color-text-primary)'}>
            Docs
          </a>
          <a href="#sandbox" style={{
            textDecoration: 'none',
            color: 'var(--color-text-primary)',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--color-text-primary)'}>
            Sandbox
          </a>
          <button 
            onClick={onGetStartedClick}
            className="btn btn-primary" 
            style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.95rem'
            }}
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-primary)',
            padding: '0.5rem'
          }}
        >
          <MenuIcon />
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0, 102, 255, 0.1)',
            padding: '1rem',
            display: 'none'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <a href="#docs" style={{
                textDecoration: 'none',
                color: 'var(--color-text-primary)',
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                Docs
              </a>
              <a href="#sandbox" style={{
                textDecoration: 'none',
                color: 'var(--color-text-primary)',
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                Sandbox
              </a>
              <button onClick={onGetStartedClick} className="btn btn-primary">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;