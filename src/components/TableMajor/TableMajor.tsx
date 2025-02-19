import React, { useEffect, useState } from 'react';
import Icon from '../ui-kit/Icon/Icon';
import { ITableProps } from './types';

import styles from './TableMajor.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../RTK/store';
import KebabMenu from '../ui-kit/KebabMenu/KebabMenu';

const TableMajor: React.FC<ITableProps> = ({ className, headTitleArr, bodyTitleArr, loadPage }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sortArr, setSortArr] = useState<Array<any>>([]);
  const [renderArr, setRenderArr] = useState<Array<any>>(bodyTitleArr);
  const [clickMarker, setClickMarker] = useState<boolean>(false);
  const usersTableOn = useSelector((state: RootState) => state.headerSeletState.value);

  const headerHandler = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
    const key = (e.currentTarget as HTMLLIElement).textContent?.trim();

    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));  //для поворота треугольника в Item

    if (!key) return;

    if (clickMarker) {
      const sortedDesc = [...bodyTitleArr].sort((a, b) => Number(b[key]) - Number(a[key]));
      setSortArr(sortedDesc)
      setClickMarker(false)
    } else {
      const sortedAsc = [...bodyTitleArr].sort((a, b) => Number(a[key]) - Number(b[key]));
      setSortArr(sortedAsc);
      setClickMarker(true);
    }
  };

  const rowValues = headTitleArr.slice(1, 6)
  //const lastItem = rowValues.pop();
  // if (lastItem !== undefined) {
  //  rowValues.splice(1, 0, lastItem);
  // }

  useEffect(() => {
    if (sortArr.length > 0) {
      setRenderArr(sortArr);
    } else {
      setRenderArr(bodyTitleArr);
    }
  }, [sortArr, bodyTitleArr]);

  const headerTabItem = rowValues.map((el: string, index: number) => (
    <li key={index} className={styles.table__header_title} onClick={(e) => headerHandler(e, index)}>
      {el}<span className={`${styles.triangle} ${activeIndex === index ? styles.rotate180 : ''} `} style={usersTableOn ? { display: 'none' } : {}}></span>
    </li>
  ));

  const bodyTabItem = renderArr.map((el: Record<string, any>, index: number) => {
    const rowValues = Object.values(el).slice(1, 6);
    //   const lastItem = rowValues.pop();
    // rowValues.splice(1, 0, lastItem)


    return (
      <li className={styles.table__row} key={index}>
        {rowValues.map((value, idx) => (
          <span className={styles.table__row_title} key={idx}>
            {String(value) === 'true' ? (
              <Icon id="iconDone" className={styles.table__row_icon} width={24} height={24} />
            ) : String(value) === 'false' ? (
              <Icon id="iconClose" className={styles.table__row_icon} width={24} height={24} />
            ) : idx === 2 && Number(value) > 70000 ? (
              <>
                <Icon id="icon-error" className={styles.table__row_icon} width={24} height={24} />
                {String(value)}
              </>
            ) : idx === 4 && usersTableOn ? (
              <>
                {String(value)}
                <KebabMenu optionSpan={['Редактировать данные пользователя', 'Удалить данные пользователя']} indexKey={index}/>
              </>
            ) : (
              String(value)
            )}
          </span>

        ))}
      </li>
    );
  });

  return (
    <div className={usersTableOn ? `${styles.table} ${className} ${styles.table__users}` : `${styles.table} ${className}`}>
      <ul className={styles.table__header}>{headerTabItem}</ul>
      <ul className={styles.table__body}>{bodyTabItem}</ul>
    </div>
  );
};

export default TableMajor;


