import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import DetailsPage from '../src/components/details-page/details-page';

describe('Details Page', () => {
  test('Should render page', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <DetailsPage />
      </Provider>,
    );

    expect(getByRole('heading', { name: 'Details Page' })).toBeTruthy();
  });
});
