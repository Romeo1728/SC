import { useEffect, useState } from "react";
import TableMajor from "../../components/TableMajor/TableMajor";
import styles from "./users.module.scss";
import { useDispatch } from "react-redux";
import { setValue } from "../../RTK/slices/NavBarSlice";
import { setHeaderSelectsState } from "../../RTK/slices/HeaderSelectsSlice";
import Button from "../../components/ui-kit/Button/Button";
import Modal from "../../components/Modal/Modal";
import React from "react";
import UserEditForm from "../../components/UserEditForm/UserEditForm";



const UsersPage: React.FC = () => {
    const dispatch = useDispatch();
    const [dataHead, setDataHead] = useState<any[]>([]);
    const [dataBody, setDataBody] = useState<any[]>([]);
    const [isOpen, setIsOpen] = useState(false);


    const handleAddUser = () => {
        setIsOpen(true)
    }

    useEffect(() => {
        dispatch(setHeaderSelectsState(true));
        dispatch(setValue(true));

        const fetchData = async () => {
            const res = await fetch(`${import.meta.env.VITE_ADMIN_GET}usersTable`);
            const data = await res.json();

            if (data) {
                setDataHead(Object.keys(data[0]))
                setDataBody(data)
            }

        }
        fetchData();
    }, [])
    return (
        <section className={styles.usersPage}>
            <div className={styles.usersPage__container}>
                <TableMajor className={styles.usersPage__table} headTitleArr={dataHead} bodyTitleArr={dataBody} />
                <Button text={"Добавить нового пользователя"} className={styles.usersPage__btn} onClick={handleAddUser} />
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <UserEditForm/>
      </Modal>

        </section>
    )
}

export default UsersPage;