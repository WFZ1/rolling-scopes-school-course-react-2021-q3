import IArticleProps from "./article-props.type";

export default interface IReduxReducerInitialState {
  articles: IArticleProps[];
  apiQueryStr: string;
}
