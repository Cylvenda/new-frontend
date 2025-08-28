// Page types and navigation states
export enum AuthPageType {
  LOGIN = 'login',
  REGISTER = 'register',
  HOME = 'home'
}

export enum FormValidationState {
  IDLE = 'idle',
  VALIDATING = 'validating',
  SUCCESS = 'success',
  ERROR = 'error'
}

export enum InputFieldType {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
  CHECKBOX = 'checkbox'
}

// String formatting functions for page content and validation
export const formatPageTitle = (pageType: AuthPageType): string => {
  return pageType === AuthPageType.LOGIN ? 'Sign In' : 'Create Account';
};

export const formatPageSubtitle = (pageType: AuthPageType): string => {
  return pageType === AuthPageType.LOGIN 
    ? 'Welcome back to Zero-Trust Data Engine' 
    : 'Join Zero-Trust Data Engine today';
};

export const formatValidationError = (field: string, error: string): string => {
  return `${field}: ${error}`;
};

export const formatSuccessMessage = (action: string): string => {
  return `${action} successful! Redirecting...`;
};

// Mock data for authentication pages

// Login page initial data
export const mockLoginPageData = {
  email: '',
  password: '',
  rememberMe: false
};

// Registration page initial data  
export const mockRegisterPageData = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
};

// Page content data
export const mockPageContent = {
  login: {
    title: 'Welcome Back',
    subtitle: 'Sign in to your Zero-Trust Data Engine account',
    heroText: 'Secure access to your data protection platform',
    switchText: "Don't have an account?",
    switchLink: 'Create one here'
  },
  register: {
    title: 'Get Started Today',
    subtitle: 'Create your Zero-Trust Data Engine account',
    heroText: 'Join thousands of organizations protecting their data',
    switchText: 'Already have an account?',
    switchLink: 'Sign in here'
  }
};


// Form validation rules (reused from existing)
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
  authError: {
    success: false,
    message: 'Invalid credentials. Please try again.'
  }
};