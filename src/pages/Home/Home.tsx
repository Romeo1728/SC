import React from 'react';

import styles from './home.module.scss';
import LoginForm from '../../components/loginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { setValue } from '../../RTK/slices/NavBarSlice';   
import { useEffect } from 'react';

const Home: React.FC = () => {
   const dispatch = useDispatch();
  
      useEffect(() => {
          dispatch(setValue(false))
      }, [])
      
  return (
    <div className={styles.home__container}>
      <LoginForm />
    </div>

  );
};

export default Home;


