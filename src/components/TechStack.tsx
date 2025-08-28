import React from 'react';

const TechStack: React.FC = () => {
  const technologies = [
    { name: "Kubernetes", category: "Orchestration", color: "#326CE5" },
    { name: "GraphQL", category: "API", color: "#E10098" },
    { name: "PostgreSQL", category: "Database", color: "#336791" },
    { name: "Redis", category: "Cache", color: "#DC382D" },
    { name: "Docker", category: "Containers", color: "#2496ED" },
    { name: "Terraform", category: "Infrastructure", color: "#623CE4" },
    { name: "Prometheus", category: "Monitoring", color: "#E6522C" },
    { name: "Istio", category: "Service Mesh", color: "#466BB0" }
  ];

  return (
    <section className="section" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Background Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'rgba(0, 102, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(20px)',
        animation: 'float 8s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '30%',
        right: '15%',
        width: '150px',
        height: '150px',
        background: 'rgba(99, 102, 241, 0.08)',
        borderRadius: '50%',
        filter: 'blur(25px)',
        animation: 'float 6s ease-in-out infinite reverse'
      }} />

      <div className="container">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 className="text-display-lg" style={{
            marginBottom: '1rem'
          }}>
            Powered by <span className="gradient-text">Modern Tech Stack</span>
          </h2>
          
          <p className="text-body-lg" style={{
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Built on cloud-native technologies and industry-leading tools to ensure 
            scalability, reliability, and performance at enterprise scale.
          </p>
        </div>

        {/* Tech Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="hover-lift"
              style={{
                background: 'var(--color-surface)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Color Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: '4px',
                background: tech.color
              }} />
              
              {/* Tech Icon Placeholder */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                background: `${tech.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: tech.color,
                fontWeight: '700',
                fontSize: '1.25rem'
              }}>
                {tech.name.charAt(0)}
              </div>
              
              <div>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.25rem'
                }}>
                  {tech.name}
                </h4>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                  margin: 0
                }}>
                  {tech.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Showcase */}
        <div className="glass-card" style={{
          padding: '3rem',
          background: 'var(--color-surface)',
          border: '1px solid rgba(0, 102, 255, 0.1)',
          textAlign: 'center'
        }}>
          <h3 className="text-heading-xl" style={{
            marginBottom: '1.5rem'
          }}>
            Seamless Integrations
          </h3>
          
          <p className="text-body-lg" style={{
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Connect with your existing infrastructure and tools. Our platform supports 
            over 100+ integrations with popular DevOps and security tools.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button className="btn btn-primary">
              View All Integrations
            </button>
            <button className="btn btn-secondary">
              API Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;