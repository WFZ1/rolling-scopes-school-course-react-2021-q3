import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IReduxReducerInitialState from '../types/redux-reducer-initial-state.type';
import { INITIAL_STATE } from '../constants';

const initialState: IReduxReducerInitialState = INITIAL_STATE;

export const articlesSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IReduxReducerInitialState>) => {
      state.data = action.payload.data;
      state.apiQueryStr = action.payload.apiQueryStr;
    },
  },
});

export const { set } = articlesSlice.actions;

export default articlesSlice.reducer;
