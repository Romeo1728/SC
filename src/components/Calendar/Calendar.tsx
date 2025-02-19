import { memo, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import styles from './calendar.module.scss';
import Icon from '../ui-kit/Icon/Icon';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());

  const formatMonthYear = (date: Date) => {
    const monthYear = new Intl.DateTimeFormat('ru-RU', {
      month: 'long',
      year: 'numeric',
    }).format(date);
  
    return `${monthYear.replace(' г.', '').replace(/^./, (char) => char.toUpperCase())}`;
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Выберите дату</h3>
      <p className={styles.selectedDate}>
        {value instanceof Date 
          ? value.toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric', month: 'long' })
            .replace(/^./, (char) => char.toUpperCase()) 
          : 'Не выбрано'}
      </p>
      <Calendar
        onChange={onChange}
        value={value}
        className={styles.calendar}
        prev2Label={null}
        next2Label={null}
        prevLabel={<span className={styles.customArrow}><Icon id={'left_button_cal'} width={24} height={24} /></span>} 
        nextLabel={<span className={styles.customArrow}><Icon id={'right'} width={24} height={24} /></span>} 
        navigationLabel={({ date }) => (
          <div className={styles.navigationLabel}>
            <span>{formatMonthYear(date)}</span>
            <Icon className={styles.icon__down} id={'down_icon'} width={18} height={18} />
          </div>
        )}
      />
      
      <div className={styles.button__box}>
        <button className={styles.button__calendar}>Закрыть</button>
        <button className={styles.button__calendar}>ОК</button>
      </div>
    </div>
  );
}

export default memo(CalendarComponent);
