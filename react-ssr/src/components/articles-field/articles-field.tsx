import './articles-field.scss';
import React, { FC } from 'react';
import { Article } from '../article/article';
import { UseAppSelector } from '../../hooks';

export const ArticlesField: FC<{ classes: string }> = ({
  classes,
}: {
  classes: string;
}) => {
  const { articles, status, totalResults } = UseAppSelector(
    (state) => state.news.data,
  );

  return (
    <div className={`articles-field ${classes}`}>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}

      {status === 'ok' && !totalResults ? (
        <p className="articles-field__empty">Articles not found</p>
      ) : null}
    </div>
  );
};
