import React, { ReactNode } from 'react';
import styles from './PopupContainer.module.scss';

interface PopupContainerProps {
  isOpen: boolean;
  name: string;
  onClick: () => void;
  children: ReactNode;
}

const PopupContainer: React.FC<PopupContainerProps> = ({ isOpen, name, onClick, children }) => {
  const popupToggleStyles = isOpen ? styles.popup__select_open : styles.popup__select;

  return (
    <div className={styles.popup}>
      <div 
        className={popupToggleStyles} 
        onClick={onClick}
      >
      <div className={styles.popup__text}>
        {name}
      </div>
      <img 
        className={styles.popup__selectIcon}
        src={isOpen ? '/icons/triangleUp.svg' : '/icons/triangleDown.svg'}
        alt='Dropdown Triangle' 
      />
      </div>
      {isOpen && (
        <div className={styles.popup__wrapper}>
          {children}
        </div>
      )}
    </div>
  );
};

export default PopupContainer;