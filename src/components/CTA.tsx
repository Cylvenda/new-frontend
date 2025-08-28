import React from 'react';

interface CTAProps {
  onGetStartedClick?: () => void;
}

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

const CTA: React.FC<CTAProps> = ({ onGetStartedClick }) => {
  return (
    <section style={{
      background: 'var(--gradient-hero)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'float 5s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '150px',
        height: '150px',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '50%',
        filter: 'blur(30px)',
        animation: 'float 7s ease-in-out infinite reverse'
      }} />

      <div className="container section" style={{
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
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
            🎯 Ready to Get Started?
          </div>
          
          <h2 className="text-display-lg" style={{
            color: 'white',
            marginBottom: '1.5rem'
          }}>
            Transform Your Security Posture{' '}
            <span style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Today
            </span>
          </h2>
          
          <p className="text-body-lg" style={{
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Join thousands of organizations that trust our zero-trust data engine 
            to protect their most valuable assets. Start your free trial today.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <button 
              onClick={onGetStartedClick}
              className="btn btn-primary" 
              style={{
                background: 'white',
                color: 'var(--color-primary)',
                fontSize: '1.1rem',
                padding: '1rem 2rem',
                boxShadow: 'var(--shadow-xl)'
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
              Schedule Demo
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            opacity: 0.8
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem'
            }}>
              <span style={{ color: '#10B981' }}>✓</span>
              No credit card required
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem'
            }}>
              <span style={{ color: '#10B981' }}>✓</span>
              14-day free trial
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem'
            }}>
              <span style={{ color: '#10B981' }}>✓</span>
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;