import React from 'react';
// import { useState } from 'react';
import styles from './checkboxWithLabel.module.scss';

interface CheckboxWithLabelProps {
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLabelClick?: () => void;
  className?: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ label, checked, onChange, onLabelClick, className }) => {

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.label} onClick={onLabelClick}>
        {label}
      </div>
      <label className={styles.checkbox_container}>
        <input
          className={styles.checkbox_input}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className={styles.checkbox}></span>
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
// const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ label, checked, onChange, className }) => {
//   // const [isChecked, setIsChecked] = useState(false);

//   // const handleCheckboxChange = () => {
//   //   setIsChecked(!isChecked);
//   // };

//   return (
//     <label className={`${styles.custom_checkbox} ${className}`}>
//       {label}
//       <input className={styles.checkbox_input}
//         type="checkbox"
//         checked={checked}
//         onChange={onChange}
//       />
//       <span className={styles.checkbox}></span>
//     </label>
//   );
// };

// export default CheckboxWithLabel;
