import React from 'react';

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const NetworkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="2"/>
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
  </svg>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldIcon />,
      title: "Zero-Trust Security",
      description: "Never trust, always verify. Every request is authenticated, authorized, and encrypted.",
      color: "var(--color-success)"
    },
    {
      icon: <ChartIcon />,
      title: "Real-time Analytics",
      description: "Monitor threats and performance with advanced AI-powered analytics and insights.",
      color: "var(--color-primary)"
    },
    {
      icon: <NetworkIcon />,
      title: "Global Network",
      description: "Distributed architecture ensures low latency and high availability worldwide.",
      color: "var(--color-secondary)"
    }
  ];

  return (
    <section className="section" style={{
      background: 'var(--color-surface)',
      position: 'relative'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 102, 255, 0.05) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)`,
        pointerEvents: 'none'
      }} />

      <div className="container">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <div style={{
            display: 'inline-block',
            background: 'var(--gradient-primary)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '1.5rem'
          }}>
            Core Features
          </div>
          
          <h2 className="text-display-lg" style={{
            marginBottom: '1rem'
          }}>
            Built for <span className="gradient-text">Modern Security</span>
          </h2>
          
          <p className="text-body-lg" style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Our platform combines cutting-edge technology with proven security principles 
            to deliver unparalleled protection for your data and infrastructure.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card hover-lift"
              style={{
                padding: '2.5rem',
                background: 'var(--color-surface)',
                border: '1px solid rgba(0, 102, 255, 0.1)',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background Gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${feature.color} 0%, transparent 100%)`
              }} />
              
              <div style={{
                color: feature.color,
                marginBottom: '1.5rem'
              }}>
                {feature.icon}
              </div>
              
              <h3 className="text-heading-lg" style={{
                marginBottom: '1rem',
                color: 'var(--color-text-primary)'
              }}>
                {feature.title}
              </h3>
              
              <p className="text-body" style={{
                lineHeight: '1.7'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass-card" style={{
          padding: '3rem',
          background: 'var(--gradient-primary)',
          color: 'white',
          textAlign: 'center'
        }}>
          <h3 className="text-heading-xl" style={{
            color: 'white',
            marginBottom: '2rem'
          }}>
            Trusted by Industry Leaders
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                fontFamily: 'var(--font-display)',
                marginBottom: '0.5rem'
              }}>
                1M+
              </div>
              <div style={{
                fontSize: '1rem',
                opacity: 0.9
              }}>
                Threats Blocked Daily
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                fontFamily: 'var(--font-display)',
                marginBottom: '0.5rem'
              }}>
                150+
              </div>
              <div style={{
                fontSize: '1rem',
                opacity: 0.9
              }}>
                Enterprise Clients
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                fontFamily: 'var(--font-display)',
                marginBottom: '0.5rem'
              }}>
                24/7
              </div>
              <div style={{
                fontSize: '1rem',
                opacity: 0.9
              }}>
                Security Monitoring
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                fontFamily: 'var(--font-display)',
                marginBottom: '0.5rem'
              }}>
                99.99%
              </div>
              <div style={{
                fontSize: '1rem',
                opacity: 0.9
              }}>
                Threat Detection Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;