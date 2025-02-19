import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterClassesState {
  isOpen: boolean;
  showClasses: boolean;
  inputValue: string;
  selectedClasses: string[];
  openSections: {[key: string]: boolean};

}

const initialState: IFilterClassesState = {
  isOpen: false,
  showClasses: false,
  inputValue: '',
  selectedClasses: [],
  openSections: {},
};

const filterClassesSlice = createSlice({
  name: 'filterClasses',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setShowClasses: (state, action: PayloadAction<boolean>) => {
      state.showClasses = action.payload
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload
    },
    setSelectedClasses: (state, action: PayloadAction<string[]>) => {
      state.selectedClasses = action.payload
    },
    toggleSection: (state, action: PayloadAction<string>) => {
      const sectionKey = action.payload;
      state.openSections[sectionKey] = !state.openSections[sectionKey]
    },
    resetFilters: (state) => {
      state.isOpen = false;
      state.showClasses = false;
      state.inputValue = '';
      state.selectedClasses = [];
      state.openSections = {};
    },
  },
});

export const { 
  setIsOpen, 
  setShowClasses, 
  setInputValue, 
  setSelectedClasses, 
  toggleSection,
  resetFilters,
} = filterClassesSlice.actions;
export default filterClassesSlice.reducer;