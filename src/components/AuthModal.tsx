import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';
import { 
  ModalType, 
  FormValidationState,
  mockRegistrationData, 
  mockLoginData, 
  mockValidationRules,
  mockAuthResponses 
} from '../authMockData';

interface AuthModalProps {
  isOpen: boolean;
  modalType: ModalType;
  onClose: () => void;
  onSwitchModal: (type: ModalType) => void;
}

interface FormErrors {
  [key: string]: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  rememberMe: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  modalType,
  onClose,
  onSwitchModal
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    rememberMe: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [validationState, setValidationState] = useState<FormValidationState>(FormValidationState.IDLE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal type changes
  useEffect(() => {
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
      rememberMe: false
    });
    setErrors({});
    setValidationState(FormValidationState.IDLE);
    setIsSubmitting(false);
  }, [modalType]);

  const validateField = (field: string, value: string | boolean): string => {
    const rules = mockValidationRules[field as keyof typeof mockValidationRules];
    if (!rules) return '';

    if (rules.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }

    if (typeof value === 'string' && value.length > 0) {
      if (rules.minLength && value.length < rules.minLength) {
        return rules.message;
      }

      if (rules.pattern && !rules.pattern.test(value)) {
        return rules.message;
      }
    }

    return '';
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (modalType === ModalType.REGISTER) {
      // Validate registration fields
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
    } else {
      // Validate login fields
      newErrors.email = validateField('email', formData.email);
      newErrors.password = validateField('password', formData.password);
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
      
      if (modalType === ModalType.REGISTER) {
        console.log('Registration successful:', mockAuthResponses.registerSuccess);
      } else {
        console.log('Login successful:', mockAuthResponses.loginSuccess);
      }
      
      setValidationState(FormValidationState.SUCCESS);
      
      // Close modal after success
      setTimeout(() => {
        onClose();
      }, 1500);
      
    } catch (error) {
      setValidationState(FormValidationState.ERROR);
      setErrors({ submit: mockAuthResponses.authError.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isRegister = modalType === ModalType.REGISTER;
  const isFormValid = isRegister 
    ? formData.firstName && formData.lastName && formData.username && formData.email && formData.password && formData.confirmPassword && formData.agreeToTerms
    : formData.email && formData.password;

  return (
    <Modal isOpen={isOpen && modalType !== ModalType.CLOSED} onClose={onClose}>
      <div style={{ padding: 'var(--spacing-xl)' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <h2 className="text-heading-xl" style={{ marginBottom: 'var(--spacing-xs)' }}>
            {isRegister ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>
            {isRegister ? 'Join Zero-Trust Data Engine' : 'Sign in to your account'}
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
            {isRegister ? 'Account created successfully!' : 'Welcome back!'}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
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
                placeholder="Choose a username"
              />
            </>
          )}

          <FormInput
            label="Email"
            type="email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            error={errors.email}
            required
            placeholder="Enter your email"
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

          {isRegister && (
            <>
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
            </>
          )}

          {!isRegister && (
            <FormCheckbox
              label="Remember me"
              checked={formData.rememberMe}
              onChange={(checked) => handleInputChange('rememberMe', checked)}
            />
          )}

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
                {isRegister ? 'Creating Account...' : 'Signing In...'}
              </span>
            ) : (
              isRegister ? 'Create Account' : 'Sign In'
            )}
          </button>
        </form>

        {/* Switch Modal */}
        <div style={{ textAlign: 'center' }}>
          <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>
            {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => onSwitchModal(isRegister ? ModalType.LOGIN : ModalType.REGISTER)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-primary)',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: 'inherit'
              }}
            >
              {isRegister ? 'Sign in here' : 'Sign up here'}
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
          .form-group:first-child {
            grid-column: 1 / -1;
          }
          .form-group:nth-child(2) {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </Modal>
  );
};

export default AuthModal;