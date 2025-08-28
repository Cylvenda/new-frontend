import React from 'react';

// Check Icon
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

interface FormCheckboxProps {
  label: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  checked,
  onChange,
  error,
  required = false,
  className = ''
}) => {
  return (
    <div className={`form-checkbox-group ${className}`} style={{ marginBottom: 'var(--spacing-md)' }}>
      <label 
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 'var(--spacing-xs)',
          cursor: 'pointer',
          fontSize: '0.875rem',
          lineHeight: '1.5'
        }}
      >
        <div 
          style={{
            position: 'relative',
            flexShrink: 0,
            marginTop: '2px'
          }}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            style={{
              position: 'absolute',
              opacity: 0,
              cursor: 'pointer',
              width: '100%',
              height: '100%'
            }}
          />
          <div
            style={{
              width: '20px',
              height: '20px',
              border: `2px solid ${error ? 'var(--color-error)' : checked ? 'var(--color-primary)' : 'var(--form-input-border)'}`,
              borderRadius: 'var(--radius-sm)',
              background: checked ? 'var(--color-primary)' : 'var(--form-input-background)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              color: 'white'
            }}
          >
            {checked && <CheckIcon />}
          </div>
        </div>
        
        <span style={{ 
          color: error ? 'var(--color-error)' : 'var(--color-text-secondary)',
          flex: 1
        }}>
          {label}{required && <span style={{ color: 'var(--color-error)' }}> *</span>}
        </span>
      </label>
      
      {error && (
        <div 
          style={{
            marginTop: 'var(--spacing-xs)',
            marginLeft: '28px',
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

export default FormCheckbox;