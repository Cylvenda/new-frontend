import React, { useState } from 'react';
import AuthLayout from './AuthLayout';
import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';
import { 
  AuthPageType, 
  FormValidationState,
  mockRegisterPageData,
  mockPageContent,
  mockAuthResponses
} from '../authPagesMockData';

interface RegisterPageProps {
  onNavigate: (page: AuthPageType) => void;
  onAuthSuccess?: (user: any, token?: string) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate, onAuthSuccess }) => {
  const [formData, setFormData] = useState<FormData>(mockRegisterPageData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [validationState, setValidationState] = useState<FormValidationState>(FormValidationState.IDLE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) return `${field === 'firstName' ? 'First' : 'Last'} name is required`;
        if (value.length < 2) return `${field === 'firstName' ? 'First' : 'Last'} name must be at least 2 characters`;
        break;
      
      case 'username':
        if (!value.trim()) return 'Username is required';
        if (value.length < 3) return 'Username must be at least 3 characters';
        if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Username can only contain letters, numbers, and underscores';
        break;
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) return 'Please enter a valid email address';
        break;
      
      case 'password':
        if (!value.trim()) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters long';
        break;
    }
    
    return '';
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    newErrors.firstName = validateField('firstName', formData.firstName);
    newErrors.lastName = validateField('lastName', formData.lastName);
    newErrors.username = validateField('username', formData.username);
    newErrors.email = validateField('email', formData.email);
    newErrors.password = validateField('password', formData.password);
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
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
      
      console.log('Registration successful:', mockAuthResponses.registerSuccess);
      setValidationState(FormValidationState.SUCCESS);
      
      if (onAuthSuccess) {
        onAuthSuccess(mockAuthResponses.registerSuccess.user);
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

  const isFormValid = formData.firstName && formData.lastName && formData.username && 
                     formData.email && formData.password && formData.confirmPassword && 
                     formData.agreeToTerms;

  return (
    <AuthLayout pageType={AuthPageType.REGISTER} onNavigate={onNavigate}>
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
            {mockPageContent.register.title}
          </h1>
          <p className="text-body" style={{ 
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-sm)'
          }}>
            {mockPageContent.register.subtitle}
          </p>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)',
            fontStyle: 'italic'
          }}>
            {mockPageContent.register.heroText}
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
            Account created successfully! Redirecting...
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: 'var(--spacing-md)',
            marginBottom: 'var(--spacing-md)'
          }}>
            <FormInput
              label="First Name"
              type="text"
              value={formData.firstName}
              onChange={(value) => handleInputChange('firstName', value)}
              error={errors.firstName}
              required
              placeholder="Enter your first name"
            />
            <FormInput
              label="Last Name"
              type="text"
              value={formData.lastName}
              onChange={(value) => handleInputChange('lastName', value)}
              error={errors.lastName}
              required
              placeholder="Enter your last name"
            />
          </div>

          <FormInput
            label="Username"
            type="text"
            value={formData.username}
            onChange={(value) => handleInputChange('username', value)}
            error={errors.username}
            required
            placeholder="Choose a unique username"
          />

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
            placeholder="Create a strong password"
          />

          <FormInput
            label="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={(value) => handleInputChange('confirmPassword', value)}
            error={errors.confirmPassword}
            required
            placeholder="Confirm your password"
          />

          <FormCheckbox
            label={
              <span>
                I agree to the{' '}
                <a href="#terms" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#privacy" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                  Privacy Policy
                </a>
              </span>
            }
            checked={formData.agreeToTerms}
            onChange={(checked) => handleInputChange('agreeToTerms', checked)}
            error={errors.agreeToTerms}
            required
          />

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
                Creating Account...
              </span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        {/* Switch to Login */}
        <div style={{ textAlign: 'center' }}>
          <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>
            {mockPageContent.register.switchText}{' '}
            <button
              type="button"
              onClick={() => onNavigate(AuthPageType.LOGIN)}
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
              {mockPageContent.register.switchLink}
            </button>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .auth-card {
            padding: var(--spacing-xl) !important;
          }
          
          .name-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </AuthLayout>
  );
};

export default RegisterPage;