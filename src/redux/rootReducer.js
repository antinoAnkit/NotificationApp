import { combineReducers } from 'redux';
import storage from '@react-native-async-storage/async-storage';

// slices
import userReducer from './slices/user';
import notificationsReducer from './slices/notifications';


// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['user', 'notifications'],// 'user' add 'user' in this array to make it persist
};
const rootReducer = combineReducers({
  user: userReducer,
  notifications:notificationsReducer
});

export { rootPersistConfig, rootReducer };
