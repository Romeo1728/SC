import { combineReducers } from '@reduxjs/toolkit';
import testSlice from './testSlice';
import NavBarSlice from './NavBarSlice';
import filterClassesSlice from './filterClassesSlice';
import HeaderSelectSlice from './HeaderSelectsSlice';

const rootReducer = combineReducers({
  testReducer: testSlice,
  navBarState: NavBarSlice,
  filterClassesReducer: filterClassesSlice,
  headerSeletState: HeaderSelectSlice
});

export default rootReducer;
