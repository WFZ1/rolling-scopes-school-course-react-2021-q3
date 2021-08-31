import './article-page.scss';
import React from 'react';
import IArticleProps from '../../types/article-props.type';
import { NEWS_API_URL } from '../../constants';

export default class ArticlePage extends React.Component<
  unknown,
  { article?: IArticleProps }
> {
  constructor(props: unknown) {
    super(props);

    this.state = {};

    this.getData();
  }

  private static getDataFromUrlStr():
    | { apiOpts: string; articleId: string }
    | false {
    const opts = {
      apiOpts: window.location.search,
      articleId: window.location.pathname
        .replace('/details/', '')
        .replace(/&dot_/g, '.')
        .replace(/&/g, '/'),
    };

    if (!opts.apiOpts || !opts.articleId) return false;

    return opts;
  }

  private findArticle(articles: IArticleProps[], id: string): void {
    const article = articles.find((item) => item.url.indexOf(id) + 1);

    if (!article) return;

    this.setState({
      article,
    });
  }

  private async getData(): Promise<void> {
    const searchStrData = ArticlePage.getDataFromUrlStr();

    if (!searchStrData) return;

    const { apiOpts, articleId } = searchStrData;

    try {
      const url = `${NEWS_API_URL}${apiOpts}`;

      const res = await fetch(url);
      const data = await res.json();

      this.findArticle(data.articles, articleId);
    } catch (err: unknown) {
      console.error(err);
    }
  }

  render(): JSX.Element {
    if (IS_CLIENT) {
      document.body.className = 'page article-page';
    }

    return (
      <main className="article-page__main page__main main">
        {this.state.article ? (
          <>
            <h2 className="page__title article__title">
              {this.state.article.title}
            </h2>

            <img
              className="article__image"
              src={this.state.article.urlToImage}
              alt={this.state.article.title}
            />

            {this.state.article.author ? (
              <div className="article__rights">
                By{' '}
                <span className="article__author-name">
                  {this.state.article.author}
                </span>{' '}
                from{' '}
                <span className="article__source-name">
                  {this.state.article.source.name}
                </span>
              </div>
            ) : null}

            <span className="article__published-at">
              On {this.state.article.publishedAt.split('T')[0]}
            </span>

            <p className="article__content">
              {this.state.article.content.split(' [+')[0]}
            </p>
            <a className="article__read-more" href={this.state.article.url}>
              Read more
            </a>
          </>
        ) : (
          <p className="article__null">Article not found</p>
        )}
      </main>
    );
  }
}
