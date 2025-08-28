import React, { useState } from 'react';

// Eye Icons
const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

interface FormInputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  className = ''
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`form-group ${className}`} style={{ marginBottom: 'var(--spacing-md)' }}>
      <label 
        style={{
          display: 'block',
          marginBottom: 'var(--spacing-xs)',
          color: 'var(--form-label-color)',
          fontSize: '0.875rem',
          fontWeight: '600'
        }}
      >
        {label}{required && <span style={{ color: 'var(--color-error)' }}> *</span>}
      </label>
      
      <div style={{ position: 'relative' }}>
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`form-input ${error ? 'form-input-error' : ''}`}
          style={{
            width: '100%',
            padding: type === 'password' ? '0.75rem 3rem 0.75rem 1rem' : '0.75rem 1rem',
            border: `2px solid ${error ? 'var(--form-input-error)' : isFocused ? 'var(--form-input-border-focus)' : 'var(--form-input-border)'}`,
            borderRadius: 'var(--radius-md)',
            background: 'var(--form-input-background)',
            fontSize: '1rem',
            transition: 'all 0.2s ease',
            outline: 'none',
            fontFamily: 'var(--font-primary)'
          }}
        />
        
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-secondary)',
              padding: '0.25rem',
              borderRadius: 'var(--radius-sm)',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
      
      {error && (
        <div 
          style={{
            marginTop: 'var(--spacing-xs)',
            color: 'var(--color-error)',
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}
        >
          <span>⚠</span>
          {error}
        </div>
      )}
    </div>
  );
};

export default FormInput;