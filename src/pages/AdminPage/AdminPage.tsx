import { useEffect, useState } from "react";
import ChartDonut from "../../components/ChartDonut/ChartDonut";
import { useDispatch } from "react-redux";
import { setValue } from "../../RTK/slices/NavBarSlice";
import styles from "./admin-page.module.scss";
import TableMajor from "../../components/TableMajor/TableMajor";


interface IAdmin {
    chartTitle: string
}

const AdminPage: React.FC<IAdmin> = ({ chartTitle }) => {
    const dispatch = useDispatch();
    
    const [dataHead, setDataHead] = useState<any[]>([]);
    const [dataBody,setDataBody] = useState<any[]>([]);
    
    useEffect(() => {
        dispatch(setValue(true))
        
        const fetchData =  async () => {
            const res = await fetch(`${import.meta.env.VITE_ADMIN_GET}mainTable`);
            const data = await res.json();
           
            if (data) {
                setDataHead(Object.keys(data[0]))
                setDataBody(data)
            }

        }
        fetchData();
    }, [])

   
  
    return (
        <section className={styles.adminPage}>
            <div className={styles.adminPage__container}>
                

                <TableMajor className={styles.adminPage__table} headTitleArr={dataHead} bodyTitleArr={dataBody} />
                <div className={styles.adminPage__chart_block}>
                    <h3 className={styles.adminPage__chart_title}>{chartTitle}</h3>
                    <ChartDonut totalValue={500} dataValues={ [40, 30, 12, 20]} dataLabels={["ОРВИ", "Пневмания", "Энтеровирусная инфекция", "По заявлению родителей"]} />

                </div>
            </div>
        </section>
    );
};

export default AdminPage;