import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import appReducers from './reducers/appReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    appReducer: appReducers
  }
});