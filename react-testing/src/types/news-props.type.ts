import IArticleProps from './article-props.type';

export default interface INewsProps {
  articles: IArticleProps[];
  status: string | undefined;
  totalResults: number | undefined;
};
