import { useForm } from 'react-hook-form';
import styles from './login-form.module.scss';
import Icon from '../ui-kit/Icon/Icon';
import { Link, useNavigate } from 'react-router-dom';

interface AuthForm {
  'email': string,
  'password': string,
}

const LoginForm = () => {
  const { register, handleSubmit, formState, trigger } = useForm<AuthForm>({
    mode: 'onChange',
    delayError: 2000,
  })

  const navigate = useNavigate();

  const onSubmit = (data:any) => {
    console.log(data);
    setTimeout(() => {
      navigate("/greetings");
    }, 2000);
  }

  const emailError = formState.errors.email?.message;
  const passError = formState.errors.password?.message;

  
  return (
      <div className={styles.login__wrapper}>
        <a className={styles.login__logo} href="#" ><Icon className={styles.login__icon}  id={'LogoSC'} width={36} height={15} /><span className={styles.login__txt}>SCHOOL CONTROL</span></a>
        <div className={styles.login__container}>
          <div className={styles.login__box}>
            <h2 className={styles.login__title}>Вход</h2>
            <form onSubmit={handleSubmit(onSubmit, () => formState.isValid || trigger())} noValidate>

              <div className={styles.login__input_box}>
                  <input id='login' className={`${styles.login__input} ${emailError ? styles.login__input_error : ''}`} type="text" required {...register (
                    'email', {
                      required: '*Заполните все поля',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: '*Некорректный email',
                      },
                    }
                  )}/>
                  {emailError && (<Icon id="error_icon" className={styles.login__icon__error} width={24} height={24} />)}
                  <label className={styles.login__label} htmlFor='login'>Логин</label>
                  {emailError && <p className={styles.login__error}>{emailError}</p>}
              </div>
              <div className={styles.login__input_box}>
                  <input id='pass' className={`${styles.login__input} ${passError ? styles.login__input_error : ''}`} type="password" required {...register('password', {
                      required: '*Заполните все поля',
                      minLength: {
                          value: 6,
                          message: '*Минимум 6 символов'
                      }
                    })} />
                    {passError && (<Icon id="error_icon" className={styles.login__icon__error} width={24} height={24} />)}
                    <label className={styles.login__label} htmlFor='pass'>Пароль</label>
                    {passError && <p className={styles.login__error}>{passError}</p>}
              </div>
              <Link className={styles.login__recovery} to="/forgotPassword">Забыли пароль?</Link>
              <button className={styles.login__button}>Войти</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default LoginForm;