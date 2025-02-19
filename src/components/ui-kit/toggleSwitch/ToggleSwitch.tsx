import React, { useState } from 'react';
import styles from './toggleSwitch.module.scss';

const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className={styles.toggle_switch}>
      <input
        type="checkbox"
        id="toggle"
        className={styles.toggle_checkbox}
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className={styles.toggle_label}></label>
    </div>
  );
};

export default ToggleSwitch;
