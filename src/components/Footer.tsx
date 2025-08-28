import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: ['Features', 'Security', 'Integrations', 'API', 'Pricing'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Status', 'Changelog'],
    Legal: ['Privacy', 'Terms', 'Security', 'Compliance', 'GDPR']
  };

  return (
    <footer style={{
      background: 'var(--color-text-primary)',
      color: 'white',
      paddingTop: '4rem',
      paddingBottom: '2rem'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Section */}
          <div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              fontFamily: 'var(--font-display)',
              marginBottom: '1rem'
            }}>
              <span style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Zero-Trust
              </span>{' '}
              Data Engine
            </div>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Revolutionizing data security with zero-trust architecture. 
              Protect your most valuable assets with enterprise-grade security.
            </p>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                color: 'white'
              }}>
                {category}
              </h4>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: '0.75rem' }}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'white'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '2rem',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Stay Updated
          </h3>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Get the latest security insights, product updates, and industry news 
            delivered to your inbox.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            maxWidth: '400px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: '250px',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '0.875rem'
              }}
            />
            <button className="btn btn-primary" style={{
              background: 'var(--gradient-primary)',
              padding: '0.75rem 1.5rem'
            }}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.875rem'
          }}>
            © 2024 Zero-Trust Data Engine. All rights reserved.
          </div>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <a
              href="#privacy"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;