import './search-bar.scss';
import React from 'react';

export default class SearchBar extends React.Component<{ classes: string }> {
  render(): JSX.Element {
    return (
      <form className={`search-bar ${this.props.classes}`}>
        <input
          className="search-bar__field"
          type="search"
          placeholder="Search..."
          required
        />
        <button className="search-bar__btn" type="button">
          <img
            className="search-bar__btn-img"
            src="assets/icons/search.svg"
            alt="Search"
          />
        </button>
      </form>
    );
  }
}
