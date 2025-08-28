// Form validation states and modal types
export enum FormValidationState {
  IDLE = 'idle',
  VALIDATING = 'validating',
  SUCCESS = 'success',
  ERROR = 'error'
}

export enum ModalType {
  REGISTER = 'register',
  LOGIN = 'login',
  CLOSED = 'closed'
}

export enum InputFieldType {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
  CHECKBOX = 'checkbox'
}

// String formatting functions for form validation and user feedback
export const formatValidationError = (field: string, error: string): string => {
  return `${field}: ${error}`;
};

export const formatSuccessMessage = (action: string): string => {
  return `${action} successful!`;
};

export const formatFieldLabel = (field: string, required: boolean = false): string => {
  return required ? `${field} *` : field;
};

// Mock data for authentication forms and validation

// Registration form initial data
export const mockRegistrationData = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
};

// Login form initial data  
export const mockLoginData = {
  email: '',
  password: '',
  rememberMe: false
};

// Form validation rules
export const mockValidationRules = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  password: {
    required: true,
    minLength: 8,
    message: 'Password must be at least 8 characters long'
  },
  firstName: {
    required: true,
    minLength: 2,
    message: 'First name must be at least 2 characters'
  },
  lastName: {
    required: true,
    minLength: 2,
    message: 'Last name must be at least 2 characters'
  },
  username: {
    required: true,
    minLength: 3,
    pattern: /^[a-zA-Z0-9_]+$/,
    message: 'Username must be at least 3 characters and contain only letters, numbers, and underscores'
  }
};

// Mock API responses
export const mockAuthResponses = {
  registerSuccess: {
    success: true,
    message: 'Account created successfully!',
    user: {
      id: '12345',
      email: 'user@example.com',
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  loginSuccess: {
    success: true,
    message: 'Welcome back!',
    token: 'mock-jwt-token',
    user: {
      id: '12345',
      email: 'user@example.com',
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  authError: {
    success: false,
    message: 'Invalid credentials. Please try again.'
  }
};