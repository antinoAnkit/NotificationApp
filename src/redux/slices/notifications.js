import {createSlice} from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  notifications: [
    {
      android: {
        imageUrl:
          'https://streetphotography.com/wp-content/uploads/2017/08/test.png',
      },
      body: 'Test Body',
      title: 'Test Title',
    },
  ],
};

const slice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    // notifications
    // ----------------------------------------------------------------------
    addNotification(state, {payload}) {
      state.notifications = [...state.notifications, payload];
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {addNotification} = slice.actions;
