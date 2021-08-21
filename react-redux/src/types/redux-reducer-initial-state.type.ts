import IArticleProps from "./article-props.type";
import INewsApiQueryOpts from "./news-api-query-opts.type";

export default interface IReduxReducerInitialState {
  articles: IArticleProps[];
  apiQueryOpts: INewsApiQueryOpts;
}
