import INewsProps from './news-props.type';

export default interface IReduxReducerInitialState {
  data: INewsProps;
  apiQueryStr: string;
}
