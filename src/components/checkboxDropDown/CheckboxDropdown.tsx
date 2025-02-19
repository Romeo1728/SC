import React, { useState } from 'react';
import styles from './CheckboxDropdown.module.scss';
import PopupContainer from '../ui-kit/popupContainer/PopupContainer';
import { options } from './CheckboxDropDownOptions';
import Button from '../ui-kit/Button/Button';

const CheckboxDropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleOption = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };
  const handleApply = () => {
    console.log('Применить:', selectedOptions);
  };

  const handleReset = () => {
    setSelectedOptions([]);
  };

  return (
    <PopupContainer
      isOpen={isOpen}
      name={'Выбрать причины'}
      onClick={toggleMenu}
    >
      <ul className={styles.menu__dropdown}>
        {options.map((option) => (
          <li className={styles.menu__dropdown_item} key={option.value}>
            <label>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.value)}
                onChange={() => toggleOption(option.value)}
                className={styles.menu__dropdown_checkbox}
              />
              {option.value}
              <span className={styles.newCheckbox}></span>
            </label>
          </li>
        ))}
        <div className={styles.menu__dropdown_buttons}>
          <Button
            text={'Сбросить'}
            className={styles.menu__dropdown_btn}
            onClick={handleReset}
          />
          <Button
            text={'Применить'}
            className={styles.menu__dropdown_btn}
            onClick={handleApply}
          />
        </div>
      </ul>
    </PopupContainer>
  );
};

export default CheckboxDropDown;
