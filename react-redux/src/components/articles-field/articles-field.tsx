import './articles-field.scss';
import React, { FC } from 'react';
import { Article } from '../article/article';
import { UseAppSelector } from '../../hooks';

export const ArticlesField: FC<{ classes: string }> = ({
  classes,
}: {
  classes: string;
}) => {
  const { articles } = UseAppSelector((state) => state.news);

  return (
    <div className={`articles-field ${classes}`}>
      {articles.length
        ? articles.map((article) => (
            <Article key={article.id} article={article} />
          ))
        : null}
    </div>
  );
};
