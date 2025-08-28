import React from 'react';

interface HeroProps {
  onGetStartedClick?: () => void;
}

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      background: 'var(--gradient-hero)',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
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

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        paddingTop: '6rem'
      }}>
        {/* Left Content */}
        <div className="animate-fade-in-up" style={{
          color: 'white'
        }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)'
          }}>
            🚀 Next-Gen Security Platform
          </div>
          
          <h1 className="text-display-xl" style={{
            color: 'white',
            marginBottom: '1.5rem'
          }}>
            Secure Your Data with{' '}
            <span style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Zero-Trust
            </span>{' '}
            Architecture
          </h1>
          
          <p className="text-body-lg" style={{
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2.5rem',
            maxWidth: '500px'
          }}>
            Revolutionary data engine that implements zero-trust principles at every layer. 
            Secure, scalable, and intelligent protection for your most critical assets.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={onGetStartedClick}
              className="btn btn-primary" 
              style={{
                background: 'white',
                color: 'var(--color-primary)',
                fontSize: '1.1rem',
                padding: '1rem 2rem'
              }}
            >
              Start Free Trial
              <ArrowRightIcon />
            </button>
            
            <button className="btn btn-secondary" style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              fontSize: '1.1rem',
              padding: '1rem 2rem'
            }}>
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'white',
                fontFamily: 'var(--font-display)'
              }}>
                99.9%
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Uptime SLA
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'white',
                fontFamily: 'var(--font-display)'
              }}>
                &lt;10ms
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Response Time
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'white',
                fontFamily: 'var(--font-display)'
              }}>
                500K+
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Protected Assets
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Dashboard Image */}
        <div className="animate-slide-in-right" style={{
          position: 'relative'
        }}>
          <div className="glass-card" style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjB0ZWNobm9sb2d5JTIwY2hhcnRzJTIwZGF0YXxlbnwwfDB8fGJsdWV8MTc1NjQxMzA4OXww&ixlib=rb-4.1.0&q=85"
              alt="Modern dashboard interface with dark theme, charts, graphs, security metrics, futuristic technology - Sigmund on Unsplash"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-xl)'
              }}
            />
          </div>
          
          {/* Floating Elements */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            background: 'var(--color-success)',
            color: 'white',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem',
            fontWeight: '600',
            boxShadow: 'var(--shadow-lg)'
          }} className="animate-float">
            🔒 100% Secure
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            left: '-20px',
            background: 'var(--color-accent)',
            color: 'white',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem',
            fontWeight: '600',
            boxShadow: 'var(--shadow-lg)',
            animationDelay: '1s'
          }} className="animate-float">
            ⚡ Real-time Analytics
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;