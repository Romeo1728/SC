import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./kebab-menu.module.scss";

interface IKebabMenuProps {
    optionSpan?: string[];
    className?: string;
    indexKey: number;
 
}

const KebabMenu: React.FC<IKebabMenuProps> = ({ optionSpan = [],  }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    //const [targetIdx, setTargetIdx] = useState<number>(0)
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        // setTargetIdx(indexKey);

        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const newX = rect.left + window.scrollX;
            const newY = rect.top + window.scrollY;
            setPosition({ x: newX, y: newY });
        }
        setIsVisible((prev) => !prev);
    };


    return (
        <>
            <div className={isVisible ? `${styles.kebab__btn} ${styles.bg}` : styles.kebab__btn} onClick={handleClick} ref={ref}>
                <span className={styles.kebab__dot}></span>
                <span className={styles.kebab__dot}></span>
                <span className={styles.kebab__dot}></span>
            </div>

            {isVisible &&
                createPortal(
                    <div
                        className={isVisible ? `${styles.kebab__menu} ${styles.visibl}` : styles.kebab__menu}
                        style={{ top: position.y + 30, left: position.x - 200 }}
                    >
                        {optionSpan.map((el: string, idx: number) => (
                            <span className={styles.kebab__option} key={idx} >
                                {el}
                            </span>
                        ))}
                    </div>,
                    document.body
                )}
        </>
    );
};

export default KebabMenu;
