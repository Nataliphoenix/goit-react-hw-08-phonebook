// import { createSlice } from '@reduxjs/toolkit';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     setStatusFilter(state, action) {
//       return (state = action.payload);
//     },
//   },
// });

// export const { setStatusFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;

// // Selectors
// export const getFilterValue = state => state.filter;

import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts: (_, { payload }) => payload,
  },
});

export const { filterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
