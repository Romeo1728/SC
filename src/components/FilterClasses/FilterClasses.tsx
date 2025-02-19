import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckboxWithLabel from '../ui-kit/checkboxWithLabel/CheckboxWithLabel';
import PopupContainer from '../ui-kit/popupContainer/PopupContainer';
import { RootState } from '../../RTK/store';
import { 
  setIsOpen, 
  setShowClasses, 
  setInputValue, 
  setSelectedClasses, 
  toggleSection,
  resetFilters,
} from '../../RTK/slices/filterClassesSlice';
import { classOptions, filterOptions } from './constants';
import styles from './FilterClasses.module.scss';

const FilterClasses: React.FC = () => {
  const dispatch = useDispatch();
  const { 
    isOpen, 
    showClasses, 
    inputValue, 
    selectedClasses, 
    openSections 
  } = useSelector((state: RootState) => state.filterClassesReducer);

  const toggleMenu = () => dispatch(setIsOpen(!isOpen));  

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Обновляем поисковый запрос
    dispatch(setInputValue(e.target.value));
  };

  const handleCheckboxChange = (label: string, checked: boolean) => {
    const checkedClasses = checked 
      ? [...selectedClasses, label] 
      : selectedClasses.filter((classItem) => classItem !== label);
    dispatch(setSelectedClasses(checkedClasses)); // Добавляем/удаляем чекнутый элемент в массиве
  };

  const filteredClassOptions = filterOptions(classOptions, inputValue); // Фильтруем классы по поисковому запросу

  const isClassSelected = (label: string) => selectedClasses.includes(label); //Проверяем, выбран ли класс.

  const handleResetFilters = () => {
    dispatch(resetFilters());
  }

  return (
    <PopupContainer 
      isOpen={isOpen} 
      name={!isOpen && selectedClasses.length > 0 ? selectedClasses.join(', ') : 'Выберите классы'} 
      onClick={toggleMenu}>
      <div className={styles.filter__search}>
        <input 
          className={styles.filter__searchInput}
          type="search"
          value={inputValue}
          placeholder="Поиск"
          onChange={handleSearchChange}
        />
        {!inputValue && (
          <img 
            className={styles.filter__searchIcon} 
            src='/icons/searchInput.svg' 
            alt="Search Icon" 
          />
        )}
      </div>
      <div className={styles.filter__allClasses}>
        <CheckboxWithLabel
          label='Все классы'
          checked={isClassSelected('Все классы')}
          onChange={(e) => handleCheckboxChange('Все классы', e.target.checked)}
          onLabelClick={() => dispatch(setShowClasses(!showClasses))}
        />
      </div>
      {showClasses && (
        <div className={styles.filter__grades}>
          {filteredClassOptions.map((grade) => (
            <div className={styles.filter__gradeItem} key={grade.value}>
              <CheckboxWithLabel
                label={grade.label}
                checked={isClassSelected(grade.label)}
                onLabelClick={() => dispatch(toggleSection(grade.value))}
                onChange={(e) => {handleCheckboxChange(grade.label, e.target.checked)}}
                className={styles.filter__label_level_1}
              />
              {openSections[grade.value] && (
                <div>
                  {grade.children?.map((child) => (
                    <div key={child.value}>
                      <CheckboxWithLabel
                        label={child.label}
                        checked={isClassSelected(child.label)}
                        onLabelClick={() => dispatch(toggleSection(child.value))}
                        onChange={(e) => {handleCheckboxChange(child.label, e.target.checked)}}
                        className={styles.filter__label_level_2}
                      />
                      {openSections[child.value] && (
                        <div>
                          {child.children?.map((subChild) => (
                            <div key={subChild.value}>
                              <CheckboxWithLabel
                                label={subChild.label}
                                checked={isClassSelected(subChild.label)}
                                onLabelClick={() => dispatch(toggleSection(subChild.value))}
                                onChange={(e) => {handleCheckboxChange(subChild.label, e.target.checked)}}
                                className={styles.filter__label_level_3}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <div className={styles.filter__buttons} >
        <button 
          className={styles.filter__buttonReset} 
          type="button"
          onClick={handleResetFilters}
        >
          Сбросить
        </button>
        <button className={styles.filter__buttonApply} type="submit">
          Применить
        </button>
      </div>
    </PopupContainer>
  )
}

export default FilterClasses
