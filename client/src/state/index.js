import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark',
  userId: '63701cc1f03239b7f700000e',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
});

export default globalSlice.reducer;
