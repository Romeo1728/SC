import { createPortal } from "react-dom";
import { IModal } from "./types";
import styles from './modal.module.scss';
const modalRoot = document.getElementById('modal')

const Modal: React.FC<IModal> = ({ children, isOpen, onClose }) => {
    
    if (!modalRoot) {
        return null
    }
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        isOpen ? (
            <div className={styles.modal}onClick={handleOverlayClick}>
                <div className={styles.modal__content}>
                    {children}
                    <button className={styles.modal__close_btn} onClick={onClose}>Close</button>
                </div>
            </div>
        ) : null,
        modalRoot
    )
}
export default Modal