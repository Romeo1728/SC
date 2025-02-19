import React from 'react';
import styles from './userCard.module.scss';
import Icon from '../Icon/Icon';

interface UserCardProps {
  photo?: string;
  name: string;
  className?: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, photo, className }) => {
  return (
    <div className={`${styles.userCard} ${className}`}>
     <div className={styles.userCard__img_container}> {!photo ? (
        <Icon
          id="iconUser"
          width={32}
          height={32}
          className={styles.userCard__icon}
        />
      ) : (
        <img src={photo} alt="user" className={styles.userCard__photo} />
      )}
      </div>
      <h2 className={styles.userCard__name}>{name}</h2>
    </div>
  );
};

export default UserCard;
