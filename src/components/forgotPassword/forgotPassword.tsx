import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './forgot.module.scss';
import Icon from '../ui-kit/Icon/Icon';
import { Link } from 'react-router-dom';

interface ForgotForm {
  email: string;
  password: string,
}

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState } = useForm<ForgotForm>({
    mode: 'onChange',
  });

  const emailError = formState.errors.email?.message;
  const passError = formState.errors.password?.message;

  const onSubmit = (data: ForgotForm) => {
    console.log('Email for recovery:', data.email);
    setIsSubmitted(true);
  };

  return (
    <div className={styles.forgot__wrapper}>
      <a className={styles.forgot__logo} href="#">
        <Icon className={styles.forgot__icon} id="LogoSC" width={36} height={15} />
        <span className={styles.forgot__txt}>SCHOOL CONTROL</span>
      </a>
      <div className={styles.forgot__container}>
        <div className={styles.forgot__box}>
          {!isSubmitted ? (
            <>
              <h2 className={styles.forgot__title}>Восстановить пароль</h2>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={styles.forgot__input_box}>
                  <input
                    id="email"
                    className={`${styles.forgot__input} ${emailError ? styles.forgot__input_error : ''}`}
                    type="email"
                    required
                    {...register('email', {
                      required: '*Введите вашу электронную почту',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: '*Некорректный email',
                      },
                    })}
                  />
                  {emailError && <Icon id="error_icon" className={styles.forgot__icon__error} width={24} height={24} />}
                  <label className={styles.forgot__label} htmlFor="email">Введите электронную почту</label>
                  {emailError && <p className={styles.forgot__error}>{emailError}</p>}
                </div>
                <button type="submit" className={styles.forgot__button}>Продолжить</button>
                <Link to="/login" className={`${styles.forgot__button} ${styles["forgot__button--white"]}`}>Назад</Link>
              </form>
            </>
          ) : (
            <>
              <h2 className={styles.forgot__title}>Новый пароль выслан</h2>
              <p className={styles.forgot__text}>
                Перейдите на почту <b>ivanova@mail.ru</b> и введите новый пароль.
              </p>
              <div className={`${styles.forgot__input_box} ${styles["forgot__input_box--pass"]}`}>
                  <input id='pass' className={`${styles.forgot__input} ${passError ? styles.forgot__input_error : ''}`} type="password" required {...register('password', {
                      required: '*Заполните все поля',
                      minLength: {
                          value: 6,
                          message: '*Минимум 6 символов'
                      }
                    })} />
                    {passError && (<Icon id="error_icon" className={styles.forgot__icon__error} width={24} height={24} />)}
                    <label className={styles.forgot__label} htmlFor='pass'>Пароль</label>
                    {passError && <p className={styles.forgot__error}>{passError}</p>}
              </div>
              <button className={styles.forgot__button}>Войти</button>
              <Link to="/login" className={`${styles.forgot__button} ${styles["forgot__button--white"]}`}>Назад</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
