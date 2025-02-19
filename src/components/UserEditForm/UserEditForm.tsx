import React from 'react';
import styles from './UserEditForm.module.scss';
import Icon from '../ui-kit/Icon/Icon';

const UserEditForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <h1 className={styles.form__title}>Добавить пользователя</h1>
      <div className={styles.form__content}>
        <div className={styles.form__imageLoader}>
          <div className={styles.form__photoContainer}>
            <Icon id={'iconUser'} width={24} height={24} className={styles.form__image} />
            {/* <img className={styles.form__image} src='/icons/userIconLarge.svg' alt="" />*/}
          </div>
          <div className={styles.form__btnContainer}>
            <button className={styles.form__addButton} type='button'>Загрузить фото</button>
            <button className={styles.form__deleteButton} type='button'>Удалить</button>
          </div>
        </div>
        <div className={styles.form__devider} ></div>
        <div className={styles.form__inputSection}>
          <input className={styles.form__input} type="text" name="" id="" />
          <div className={styles.form__nameInputs}>
            <input className={styles.form__input} type="text" name="" id="" />
            <input className={styles.form__input} type="text" name="" id="" />
          </div>
          <div className={styles.form__contactInputs}>
            <input className={styles.form__input} type="text" name="" id="" />
            <input className={styles.form__input} type="email" name="" id="" />
          </div>
          <div className={styles.form__selects}>
            <select className={styles.form__select} name="" id=""></select>
            <select className={styles.form__select} name="" id=""></select>
          </div>
        </div>
      </div>
      <button className={styles.form__saveButton} type='button'>Сохранить</button>
    </form>
  )
}

export default UserEditForm
