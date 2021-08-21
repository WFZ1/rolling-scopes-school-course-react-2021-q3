import IReduxReducerInitialState from "./redux-reducer-initial-state.type";

export default interface IReduxReducerAction extends IReduxReducerInitialState {
  type: string;
}
