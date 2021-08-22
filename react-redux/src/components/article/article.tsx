import './article.scss';
import React, { FC } from 'react';
import { UseAppSelector } from '../../hooks';
import IArticleProps from '../../types/article-props.type';

export const Article: FC<{article: IArticleProps}> = ({article}: {article: IArticleProps}) => {
  const { apiQueryStr } = UseAppSelector((state) => state.news);

  return (
    <div className="article">
      <img
        className="article__image"
        src={article.urlToImage}
        alt={article.title}
      />
      <div className="article__info">
        <h3 className="article__title">{article.title}</h3>
        {article.author ? (
          <div className="article__author">
            By
            <span className="article__author-name">
              {' '}
              {article.author}
            </span>
          </div>
        ) : (
          ''
        )}
        <span className="article__published-at">
          On {article.publishedAt.split('T')[0]}
        </span>
        <p className="article__content">{article.description}</p>
        <a className="article__read-more" href={`/details/${article.id}${apiQueryStr}`}>
          Read more
        </a>
      </div>
    </div>
  );
};
