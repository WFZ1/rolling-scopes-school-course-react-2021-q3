import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { SearchBar } from "../src/components/search-bar/search-bar";

const searchBar = (
  <Provider store={store}>
    <SearchBar classes="search-dashboard__bar" />
  </Provider>
);

const searchFieldChangeValue = (): HTMLInputElement => {
  const {getByRole} = render(searchBar);
  const searchbox = getByRole('searchbox') as HTMLInputElement;

  fireEvent.change(searchbox, { target: { value: 'news' } });

  return searchbox;
}

describe('Search Bar', () => {
  test('The sort changes active radio button after click', () => {
    const {getByRole} = render(searchBar);

    // By example https://stackoverflow.com/a/61908642/13431496

    const relevantRadio = getByRole('radio', {
      name: /relevant/i
    }) as HTMLInputElement;

    expect(relevantRadio.checked).toEqual(true);

    const popularRadio = getByRole('radio', {
      name: /popular/i
    }) as HTMLInputElement;

    fireEvent.click(popularRadio);

    expect(popularRadio.checked).toEqual(true);
  });

  test('The search field changes value', () => {
    const searchbox = searchFieldChangeValue();

    expect(searchbox.value).toBe('news');
  });

  test('Articles is loading from API', async () => {
    searchFieldChangeValue();

    const searchBtn = screen.getByRole('button', {
      name: /search/i
    });

    fireEvent.click(searchBtn);

    const readMoreLink = screen.findByRole('link', {
      name: /read more/i
    });

    const textNotFound = screen.findByText(/articles not found/i);

    expect(readMoreLink || textNotFound).toBeTruthy();
  });
});
