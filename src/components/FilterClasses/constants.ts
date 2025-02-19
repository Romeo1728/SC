interface ClassOptions {
  label: string;
  value: string;
  children?: ClassOptions[];
}

export const filterOptions = (options: ClassOptions[], searchValue: string): ClassOptions[] => {
    return options.reduce<ClassOptions[]>((acc, option) => {
      // Фильтруем детей рекурсивно
      const filteredChildren = option.children ? filterOptions(option.children, searchValue) : undefined;
      // Если текущий элемент или его дети соответствуют поиску, добавляем его в аккумулятор
      if ( 
        option.label.toLowerCase().includes(searchValue.toLowerCase()) ||
        (filteredChildren && filteredChildren.length > 0)
      ) {
        acc.push({ ...option, children: filteredChildren });
      }
      return acc;
    }, []);
  };

export const classOptions: ClassOptions[] = [
  {
    label: 'Начальная школа',
    value: 'elementary',
    children: [
      {
        label: '1-ые классы',
        value: '1st',
        children: [
          { label: '1А', value: '1A' },
          { label: '1Б', value: '1B' },
          { label: '1В', value: '1C' },
        ],
      },
      {
        label: '2-ые классы',
        value: '2nd',
        children: [
          { label: '2А', value: '2A' },
          { label: '2Б', value: '2B' },
          { label: '2В', value: '2C' },
        ],
      },
      {
        label: '3-ие классы',
        value: '3rd',
        children: [
          { label: '3А', value: '3A' },
          { label: '3Б', value: '3B' },
          { label: '3В', value: '3C' },
        ],
      },
      {
        label: '4-ые классы',
        value: '4th',
        children: [
          { label: '4А', value: '4A' },
          { label: '4Б', value: '4B' },
          { label: '4В', value: '4C' },
        ],
      },
    ],
  },
  {
    label: 'Средние классы',
    value: 'middle',
    children: [
      {
        label: '5-ые классы',
        value: '5th',
        children: [
          { label: '5А', value: '5A' },
          { label: '5Б', value: '5B' },
          { label: '5В', value: '5C' },
        ],
      },
      {
        label: '6-ые классы',
        value: '6th',
        children: [
          { label: '6А', value: '6A' },
          { label: '6Б', value: '6B' },
          { label: '6В', value: '6C' },
        ],
      },
      {
        label: '7-ые классы',
        value: '7th',
        children: [
          { label: '7А', value: '7A' },
          { label: '7Б', value: '7B' },
          { label: '7В', value: '7C' },
        ],
      },
      {
        label: '8-ые классы',
        value: '8th',
        children: [
          { label: '8А', value: '8A' },
          { label: '8Б', value: '8B' },
          { label: '8В', value: '8C' },
        ],
      },
      {
        label: '9-ые классы',
        value: '9th',
        children: [
          { label: '9А', value: '9A' },
          { label: '9Б', value: '9B' },
          { label: '9В', value: '9C' },
        ],
      },
    ],
  },
  {
    label: 'Старшие классы',
    value: 'high',
    children: [
      {
        label: '10-ые классы',
        value: '10th',
        children: [
          { label: '10А', value: '10A' },
          { label: '10Б', value: '10B' },
          { label: '10В', value: '10C' },
        ],
      },
      {
        label: '11-ые классы',
        value: '11th',
        children: [
          { label: '11А', value: '11A' },
          { label: '11Б', value: '11B' },
          { label: '11В', value: '11C' },
        ],
      },
    ],
  },
];