import React, { useState } from 'react';
import AuthLayout from './AuthLayout';
import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';
import { 
  AuthPageType, 
  FormValidationState,
  mockLoginPageData,
  mockPageContent,
  mockAuthResponses
} from '../authPagesMockData';

interface LoginPageProps {
  onNavigate: (page: AuthPageType) => void;
  onAuthSuccess?: (user: any, token: string) => void;
}

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate, onAuthSuccess }) => {
  const [formData, setFormData] = useState<FormData>(mockLoginPageData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [validationState, setValidationState] = useState<FormValidationState>(FormValidationState.IDLE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: string, value: string): string => {
    if (field === 'email') {
      if (!value.trim()) return 'Email is required';
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) return 'Please enter a valid email address';
    }
    
    if (field === 'password') {
      if (!value.trim()) return 'Password is required';
      if (value.length < 8) return 'Password must be at least 8 characters long';
    }
    
    return '';
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    newErrors.email = validateField('email', formData.email);
    newErrors.password = validateField('password', formData.password);
    
    // Remove empty errors
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key];
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setValidationState(FormValidationState.ERROR);
      return;
    }

    setIsSubmitting(true);
    setValidationState(FormValidationState.VALIDATING);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Login successful:', mockAuthResponses.loginSuccess);
      setValidationState(FormValidationState.SUCCESS);
      
      if (onAuthSuccess) {
        onAuthSuccess(mockAuthResponses.loginSuccess.user, mockAuthResponses.loginSuccess.token);
      }
      
      // Redirect after success
      setTimeout(() => {
        onNavigate(AuthPageType.HOME);
      }, 1500);
      
    } catch (error) {
      setValidationState(FormValidationState.ERROR);
      setErrors({ submit: mockAuthResponses.authError.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.email && formData.password;

  return (
    <AuthLayout pageType={AuthPageType.LOGIN} onNavigate={onNavigate}>
      <div className="auth-card" style={{
        background: 'var(--auth-card-background)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid var(--auth-card-border)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-xl)',
        maxWidth: '500px',
        width: '100%',
        padding: 'var(--spacing-2xl)'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <h1 className="text-display-lg" style={{ 
            marginBottom: 'var(--spacing-xs)',
            color: 'var(--color-text-primary)'
          }}>
            {mockPageContent.login.title}
          </h1>
          <p className="text-body" style={{ 
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-sm)'
          }}>
            {mockPageContent.login.subtitle}
          </p>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)',
            fontStyle: 'italic'
          }}>
            {mockPageContent.login.heroText}
          </p>
        </div>

        {/* Success Message */}
        {validationState === FormValidationState.SUCCESS && (
          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid var(--color-success)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-md)',
            marginBottom: 'var(--spacing-lg)',
            textAlign: 'center',
            color: 'var(--color-success)'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✓</div>
            Welcome back! Redirecting...
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            error={errors.email}
            required
            placeholder="Enter your email address"
          />

          <FormInput
            label="Password"
            type="password"
            value={formData.password}
            onChange={(value) => handleInputChange('password', value)}
            error={errors.password}
            required
            placeholder="Enter your password"
          />

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 'var(--spacing-lg)'
          }}>
            <FormCheckbox
              label="Remember me"
              checked={formData.rememberMe}
              onChange={(checked) => handleInputChange('rememberMe', checked)}
              className="remember-me"
            />
            
            <a 
              href="#forgot-password" 
              style={{
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid var(--color-error)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--color-error)',
              textAlign: 'center'
            }}>
              {errors.submit}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '1rem',
              marginBottom: 'var(--spacing-lg)',
              opacity: (!isFormValid || isSubmitting) ? 0.6 : 1,
              cursor: (!isFormValid || isSubmitting) ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid transparent',
                  borderTop: '2px solid currentColor',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
                Signing In...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Switch to Register */}
        <div style={{ textAlign: 'center' }}>
          <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>
            {mockPageContent.login.switchText}{' '}
            <button
              type="button"
              onClick={() => onNavigate(AuthPageType.REGISTER)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-primary)',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: 'inherit',
                fontWeight: '500'
              }}
            >
              {mockPageContent.login.switchLink}
            </button>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .remember-me {
          margin-bottom: 0 !important;
        }
        
        @media (max-width: 768px) {
          .auth-card {
            padding: var(--spacing-xl) !important;
          }
        }
      `}</style>
    </AuthLayout>
  );
};

export default LoginPage;