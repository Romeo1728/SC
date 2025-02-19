import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface IHeaderSelect {
 value: boolean ;
}

const initialState: IHeaderSelect = {
  value: false,
};

const HeaderSelectSlice = createSlice({
  name: 'headerSelectSlice',
  initialState,
  reducers: {
    setHeaderSelectsState: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setHeaderSelectsState } = HeaderSelectSlice.actions;
export default HeaderSelectSlice.reducer;