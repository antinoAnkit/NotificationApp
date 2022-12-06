import {createSlice} from '@reduxjs/toolkit';
// ----------------------------------------------------------------------

const initialState = {
  token: '',
  fcmTokken: '',
  loggedIn: false,
  userInfo: {},
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // login
    // ----------------------------------------------------------------------

    login(state, {payload}) {
      return {
        ...state,
        token: payload['idToken'],
        loggedIn: true,
        userInfo: payload['user'],
      };
    },
  
    // ---------------------------------------------------------------------

    setLogout(state) {
      return {
        ...state,
        token: '',
        loggedIn: false,
        userInfo: {},
        fcmTokken: '',
      };
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  setLogout,
  login
} = slice.actions;
