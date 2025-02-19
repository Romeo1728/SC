import React from 'react';
import styles from './test.module.scss';
import Modal from '../../components/Modal/Modal';
import Icon from '../../components/ui-kit/Icon/Icon';
import LoginForm from '../../components/loginForm/LoginForm';
import Checkboxes from '../../components/ui-kit/checkboxes/Checkboxes';
import ToggleSwitch from '../../components/ui-kit/toggleSwitch';

import FilterClasses from '../../components/FilterClasses/FilterClasses';
import Calendar from '../../components/Calendar/Calendar';
import Button from '../../components/ui-kit/Button/Button';
import Notification from '../../components/notification/Notification';
import SelectReasons from '../../components/checkboxDropDown/CheckboxDropdown';
import UserEditForm from '../../components/UserEditForm/UserEditForm';


const TestPage: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className={styles.test__block}>
      <h2 className={styles.test__title}>Test Page </h2>
      <button onClick={handleOpen} className={styles.test__btn_modal}>
        Modal open btn
      </button>
      

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal content</h2>
      </Modal>

      <span>id="iconHelp"</span>
      <Icon id="iconHelp" width={24} height={24} className={styles.test__icon} />
      <span>id="iconCalendar"</span>
      <Icon id="iconCalendar" width={24} height={24} className={styles.test__icon} />
      <span>id="iconHome"</span>
      <Icon id="iconHome" width={24} height={24} className={styles.test__icon} />
      <span>id="iconUser"</span>
      <Icon id="iconUser" width={24} height={24} className={styles.test__icon} />
      <span>id="iconSettings"</span>
      <Icon id="iconSettings" width={24} height={24} className={styles.test__icon} />
      <span>id="iconStatistic"</span>
      <Icon id="iconStatistic" width={24} height={24} className={styles.test__icon} />
      <span>id="iconClose"</span>
      <Icon id="iconClose" width={24} height={24} className={styles.test__icon} />
      <span>id="iconDone"</span>
      <Icon id="iconDone" width={24} height={24} className={styles.test__icon} />
      <span>id="Union"</span>
      <Icon id="Union" width={24} height={24} className={styles.test__icon} />
      <span>id="reports"</span>
      <Icon id="reports" width={24} height={24} className={styles.test__icon} />
      <span>id="Exit"</span>
      <Icon id="Exit" width={24} height={24} className={styles.test__icon} />
      <span>id="icon"</span>
      <Icon id="icon" width={24} height={24} className={styles.test__icon} />
      <span>id="icon-error"</span>
      <Icon id="icon-error" width={24} height={24} className={styles.test__icon} />
      <span>id="triangleUp"</span>
      <Icon id="triangleUp" width={24} height={24} className={styles.test__icon} />

      <LoginForm />
      <Calendar/>
      <FilterClasses />
      <Checkboxes />
      <ToggleSwitch />
      <UserEditForm />
      
      <Button
        onClick={() => console.log('button clicked')}
        text="Сформировать отчёт"
        
      />
      <Notification title='Новый пользователь добавлен' description='Внесенные Вами данные сохранены. Пароль был отправлен на почту  ' mail='ivanova@mail.ru' />
      <SelectReasons />

    </div>
  );
};

export default TestPage;


