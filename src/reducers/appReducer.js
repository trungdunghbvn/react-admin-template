/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const appReducer = createSlice({
  name: 'counter',
  initialState: {
    isSidebar: true,
  },
  reducers: {
    toggleSidebarAction: state => {
      state.isSidebar = !state.isSidebar;
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebarAction } = appReducer.actions;

export default appReducer.reducer;
