import './articles-field.scss';
import React from 'react';
import Article from '../article/article';
import IArticleProps from '../../types/article-props.type';
import INewsApiQueryOpts from '../../types/news-api-query-opts.type';

export default class ArticlesField extends React.Component<{
  classes: string;
  articles: IArticleProps[];
  apiQueryOpts: INewsApiQueryOpts
}> {

  private getArticlePageUrl(url: string): string {
    const opts = this.props.apiQueryOpts;
    const id = url
      .replace(/https?:\/\//, '')
      .replace(/\//g, '&')
      .replace(/\./g, '&dot_');

    return `${id}?q=${opts.q}&sortBy=${opts.sortBy}&pageSize=${opts.pageSize}&page=${opts.page}`;
  }

  render(): JSX.Element {
    return (
      <div className={`articles-field ${this.props.classes}`}>
        {this.props.articles.length
          ? this.props.articles.map((article) => (
              <Article key={article.author + article.title} data={article} url={this.getArticlePageUrl(article.url)} />
            ))
          : null}
      </div>
    );
  }
}
