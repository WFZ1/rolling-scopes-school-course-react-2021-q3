import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IReduxReducerInitialState from '../types/redux-reducer-initial-state.type';
import { INITIAL_STATE } from '../constants';

const initialState: IReduxReducerInitialState = INITIAL_STATE;

export const articlesSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IReduxReducerInitialState>) => {
      state.articles = action.payload.articles;
      state.apiQueryOpts = action.payload.apiQueryOpts;
    }
  }
});

export const { set } = articlesSlice.actions;

export default articlesSlice.reducer;
