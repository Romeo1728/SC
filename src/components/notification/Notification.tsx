import React from 'react';
import styles from './Notification.module.scss';
import { NotificationProps } from './NotificationProps';
import Icon from '../ui-kit/Icon/Icon';
import Button from '../ui-kit/Button/Button';

const Notification: React.FC<NotificationProps> = ({
  title,
  description,
  mail,
}) => {
  return (
    <div className={styles.notification}>
      <Icon id="iconDone" width={40} height={40} className={styles.iconDone} />
      <div className={styles.notification__description}>
        <h1 className={styles.notification__title}>{title}</h1>
        <p className={styles.notification__text}>
          {description}
          <span className={styles.notification__text_bold}>{mail}</span>
        </p>
      </div>
      <Button
        className={`${styles.buttonClose}`}
        text={
          <Icon
            id="iconClose"
            width={15}
            height={15}
            className={styles.buttonClose}
          />
        }
      />
    </div>
  );
};

export default Notification;
