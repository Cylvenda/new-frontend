import { useState, useCallback } from 'react';
import { ModalType } from '../authMockData';

export const useAuth = () => {
  const [modalState, setModalState] = useState<ModalType>(ModalType.CLOSED);

  const openRegisterModal = useCallback(() => {
    setModalState(ModalType.REGISTER);
  }, []);

  const openLoginModal = useCallback(() => {
    setModalState(ModalType.LOGIN);
  }, []);

  const closeModal = useCallback(() => {
    setModalState(ModalType.CLOSED);
  }, []);

  const switchModal = useCallback((type: ModalType) => {
    setModalState(type);
  }, []);

  return {
    modalState,
    openRegisterModal,
    openLoginModal,
    closeModal,
    switchModal,
    isModalOpen: modalState !== ModalType.CLOSED
  };
};