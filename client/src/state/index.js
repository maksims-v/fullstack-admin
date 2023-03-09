import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '63701cc1f03239c72c00017f',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setId } = globalSlice.actions;

export default globalSlice.reducer;
