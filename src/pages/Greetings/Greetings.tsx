import React from 'react';
import styles from './greetings.module.scss';
import img from '/pic.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setValue } from '../../RTK/slices/NavBarSlice';    
interface IGreetingsProps {
    title?: string;
    paragraph?: string;
}

const Greetings: React.FC<IGreetingsProps> = ({ title, paragraph }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setValue(false))
        setTimeout(() => {
            navigate("/admin");
        }, 2000);
    }, []
    )
    return (
        <div className={styles.greetings}>
            <h1 className={styles.greetings__title}>{title ? `Здравствуйте, ${title}!` : `Zdarova zae....`}</h1>
            <p className={styles.greetings__paragraph}>{paragraph ? paragraph : 'Как дела в школе сегодня?'}</p>
            <img src={img} alt='schoolBg' className={styles.greetings__img} />
        </div>
    )
}
export default Greetings;