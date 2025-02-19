import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface INavBarState {
 value: boolean ;
}

const initialState: INavBarState = {
  value: false,
};

const NavBarSlice = createSlice({
  name: 'navBarSlice',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = NavBarSlice.actions;
export default NavBarSlice.reducer;
