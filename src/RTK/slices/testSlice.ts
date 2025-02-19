import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITestState {
  value: string | null;
}

const initialState: ITestState = {
  value: null,
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = testSlice.actions;
export default testSlice.reducer;
