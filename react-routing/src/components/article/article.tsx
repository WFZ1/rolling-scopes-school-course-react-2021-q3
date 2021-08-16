import './article.scss';
import React from 'react';
import IArticleProps from '../../types/article-props.type';

export default class Article extends React.Component<{ data: IArticleProps, url: string }> {
  render(): JSX.Element {
    return (
      <div className="article">
        <img
          className="article__image"
          src={this.props.data.urlToImage}
          alt={this.props.data.title}
        />
        <div className="article__info">
          <h3 className="article__title">{this.props.data.title}</h3>
          {this.props.data.author ? (
            <div className="article__author">
              By
              <span className="article__author-name">
                {' '}
                {this.props.data.author}
              </span>
            </div>
          ) : (
            ''
          )}
          <span className="article__published-at">
            On {this.props.data.publishedAt.split('T')[0]}
          </span>
          <p className="article__content">{this.props.data.description}</p>
          <a className="article__read-more" href={`/details/${this.props.url}`}>
            Read more
          </a>
        </div>
      </div>
    );
  }
}
