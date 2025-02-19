import { useEffect, useState } from "react";
import ChartBar from "../../components/ChartBar/ChartBar";
import ChartDonut from "../../components/ChartDonut/ChartDonut";
import TableMajor from "../../components/TableMajor/TableMajor";
import styles from "./reports-page.module.scss";
import { useDispatch } from "react-redux";
import { setValue } from "../../RTK/slices/NavBarSlice";



const ReportsPage: React.FC = () => {
    

        
    const dispatch = useDispatch();
    const [dataHead, setDataHead] = useState<any[]>([]);
    const [dataBody, setDataBody] = useState<any[]>([]);
    useEffect(() => {
        dispatch(setValue(true));

        const fetchData = async () => {
            const res = await fetch(`${import.meta.env.VITE_ADMIN_REPORTS}`);
            const data = await res.json();

            if (data) {
                setDataHead(Object.keys(data[0]))
                setDataBody(data)
            }

        }
        fetchData();
    }, [])

    return (
        <section className={styles.reports}>
            <div className={styles.reports__container}>
                <div className={styles.reports__donut_block}>
                    <ChartDonut totalValue={500} dataValues={[40]} dataLabels={['отсутствуют']} loadPage="reports"/>
                </div>
                <div className={styles.reports__bar_block}>
                    <ChartBar data={[
                        { name: "ОРВИ", value: 10, bg: "#DF8D8D" },
                        { name: "Пневмония", value: 20, bg: "#E9D200" },
                        { name: ['Энтеровирусная', 'инфекция'], value: 15, bg: "#8DDF8D" },
                        { name: "По заявлению родителей", value: 25, bg: "#8D8DDF" },
                        { name: ['Выезд', 'на соревнования', 'конкурсы и т.д'], value: 4, bg: "#8DDFDF" },
                        { name: ['Неуважительная', 'причина'], value: 21, bg: "#DFBD8D" },
                        { name: ['Причина', 'неизвестна'], value: 21, bg: "#DF8DCB" },
                    ]} />
                </div>

                <TableMajor headTitleArr={dataHead} bodyTitleArr={dataBody} className={styles.reports__table} />

            </div>
        </section>
    )
}

export default ReportsPage;


