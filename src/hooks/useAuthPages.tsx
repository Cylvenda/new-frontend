import { useState, useCallback } from 'react';
import { AuthPageType } from '../authPagesMockData';

export const useAuthPages = (initialPage: AuthPageType = AuthPageType.HOME) => {
  const [currentPage, setCurrentPage] = useState<AuthPageType>(initialPage);
  const [user, setUser] = useState<any>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);

  const navigateToLogin = useCallback(() => {
    setCurrentPage(AuthPageType.LOGIN);
  }, []);

  const navigateToRegister = useCallback(() => {
    setCurrentPage(AuthPageType.REGISTER);
  }, []);

  const navigateToHome = useCallback(() => {
    setCurrentPage(AuthPageType.HOME);
  }, []);

  const handleAuthSuccess = useCallback((userData: any, token?: string) => {
    setUser(userData);
    if (token) {
      setAuthToken(token);
    }
    console.log('Authentication successful:', { user: userData, token });
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
    setAuthToken(null);
    setCurrentPage(AuthPageType.HOME);
  }, []);

  return {
    currentPage,
    user,
    authToken,
    isAuthenticated: !!user,
    navigateToLogin,
    navigateToRegister,
    navigateToHome,
    handleAuthSuccess,
    handleLogout,
    navigate: setCurrentPage
  };
};