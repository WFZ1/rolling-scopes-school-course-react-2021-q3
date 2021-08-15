import './details-page.scss';
import React from 'react';
import IArticleProps from '../../types/article-props.type';
import { NEWS_API_KEY } from '../../constants';

export default class DetailsPage extends React.Component<unknown, { article?: IArticleProps }> {
  constructor(props: unknown) {
    super(props);

    this.state = {};

    this.getData();
  }

  private static getDataFromSearchStr(): { apiOpts: string, articleId: string } | false {
    const searchStr = window.location.search;

    if (!searchStr) return false;

    const opts = searchStr.split('&id=');

    return { apiOpts: opts[0], articleId: opts[1] };
  }

  private findArticle(articles: IArticleProps[], id: string): void {
    const article = articles.find((item) => item.url.indexOf(id) + 1);

    if (!article) return;

    this.setState({
      article
    });
  }

  private async getData(): Promise<void> {
    const searchStrData = DetailsPage.getDataFromSearchStr();

    if (!searchStrData) return;

    const { apiOpts, articleId } = searchStrData;

    try {
      const url = `https://newsapi.org/v2/everything${apiOpts}&apiKey=${NEWS_API_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      this.findArticle(data.articles, articleId);
    }
    catch (err: unknown) {
      console.error(err);
    }
  }

  render(): JSX.Element {
    document.body.className = 'page details-page';

    return (
      <main className="details-page__main page__main main">
        { this.state.article ?
          <>
            <h2 className="page__title article__title">{this.state.article.title}</h2>

            <img
              className="article__image"
              src={this.state.article.urlToImage}
              alt={this.state.article.title}
            />

            {this.state.article.author ? (
              <div className="article__rights">
                By {' '}
                <span className="article__author-name">
                  {this.state.article.author}
                </span>

                {' '} from {' '}
                <span className="article__source-name">
                  {this.state.article.source.name}
                </span>
              </div>
            ) : null }

            <span className="article__published-at">
              On {this.state.article.publishedAt.split('T')[0]}
            </span>

            <p className="article__content">{this.state.article.content.split(' [+')[0]}</p>
            <a className="article__read-more" href={this.state.article.url}>
              Read more
            </a>
          </>
        : null }
      </main>
    );
  }
}
