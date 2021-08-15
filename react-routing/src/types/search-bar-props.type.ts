import IArticleProps from "./article-props.type";
import INewsApiQueryOpts from "./news-api-query-opts.type";

export default interface ISearchBarProps {
  classes: string;
  saveData: (articles: IArticleProps[], apiQueryOpts: INewsApiQueryOpts) => void;
}
