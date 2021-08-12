import './articles-field.scss';
import React from 'react';
import Article from '../article/article';
import IArticleProps from '../../types/article-props.type';

export default class ArticlesField extends React.Component<{
  classes: string;
  articles: IArticleProps[];
}> {
  render(): JSX.Element {
    return (
      <div className={`articles-field ${this.props.classes}`}>
        {this.props.articles.length
          ? this.props.articles.map((article) => (
              <Article key={article.author + article.title} data={article} />
            ))
          : null}
      </div>
    );
  }
}
