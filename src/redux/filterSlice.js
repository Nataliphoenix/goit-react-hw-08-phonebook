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

// Selectors
export const selectFilterValue = state => state.filter;
