import { useState } from "react";
import PopupContainer from "../ui-kit/popupContainer/PopupContainer";
import Calendar from "../Calendar/Calendar";
import FilterClasses from "../FilterClasses/FilterClasses";
import styles from './header.module.scss';
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import { RootState } from "../../RTK/store";

interface IHeader {
    title?: string
}

const Header: React.FC<IHeader> = ({title}) => {
    const selectBlockState = useSelector((state: RootState) => state.headerSeletState.value);
    const navBarState = useSelector((state: RootState) => state.navBarState.value);
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        navBarState &&
        <header className={selectBlockState ? `${styles.header} ${styles.header__users}`: styles.header}>
            <div className={styles.header__container}>
                <h2 className={styles.header__title}>
                    {title}
                </h2>
                <div className={selectBlockState ?`${styles.header__selects_block} ${styles.hidden}`: styles.header__selects_block}>

                    <PopupContainer
                        isOpen={isOpen}
                        name="Сегодня"
                        onClick={toggleMenu}
                    ><Calendar />
                    </PopupContainer>
                    <PopupContainer
                        name="Пустой"
                        children={undefined} isOpen={false} onClick={() => {}} />
                    <FilterClasses />
                </div>
                <NavBar />
            </div>
        </header>
    )
}

export default Header;






