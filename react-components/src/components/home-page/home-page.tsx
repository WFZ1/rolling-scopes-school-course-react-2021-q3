import './home-page.scss';
import React from 'react';
import SearchBar from '../search-bar/search-bar';
import ProductCardsField from '../product-cards-field/product-cards-field';
import { PRODUCTS } from '../../constants';

export default class HomePage extends React.Component {
  render(): JSX.Element {
    document.body.className = 'page home-page';

    return (
      <main className="home-page__main main">
        <SearchBar classes="home-page__search-bar" />
        <ProductCardsField productsProps={ PRODUCTS } />
      </main>
    );
  }
}
