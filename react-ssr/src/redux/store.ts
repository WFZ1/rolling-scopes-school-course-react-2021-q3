import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './reducer';

const store = configureStore({
  reducer: {
    news: articlesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
