import React from 'react';
import styles from './nav-bar.module.scss';
import Icon from '../ui-kit/Icon/Icon';
import UserCard from '../ui-kit/userCard/UserCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../RTK/store';
import { Link } from 'react-router-dom';

const itemsArr = [
    { iconName: 'iconHome', text: 'Главная', link: '/admin' },
    { iconName: 'reports', text: 'Отчеты', link: '/reports' },
    { iconName: 'iconUser', text: 'Пользователи', link: '/users' },
    { iconName: 'classList', text: 'Список классов', link: '/classList' },
    { iconName: 'iconHelp', text: 'Помощь', link: '/help' }
];

const NavBar: React.FC = () => {
    const navBarState = useSelector((state: RootState) => state.navBarState.value);
    const Item: JSX.Element[] = itemsArr.map((item, index) => (
        <li key={index} className={styles.navBar__item}>
           <Link to={item.link} className={styles.navBar__item_link}>
                <Icon id={item.iconName} width={28} height={28} className={styles.navBar__item_icon} />
                <span className={styles.navBar__item_txt}>{item.text}</span>
            </Link>
        </li>
    )
    );

    return (
        navBarState &&
        <nav className={styles.navBar}>
            <div>

            </div>
            <a className={styles.navBar__logo_link}><Icon id={'LogoSC'} width={36} height={15} /><span className={styles.navBar__logo_txt}>School ControL</span></a>
            <ul className={styles.navBar__list}>{Item}</ul>
            <UserCard name='Иванова Мария Ивановна' className={styles.navBar__user_card} />
        </nav>
    )
}

export default NavBar;  