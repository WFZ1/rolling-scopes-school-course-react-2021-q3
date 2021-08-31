import IReduxReducerInitialState from '../types/redux-reducer-initial-state.type';

export const restoreDataOnClient = ():
  | { news: IReduxReducerInitialState }
  | Record<string, never> => {
  const el = document.getElementById('data');

  if (el && el.textContent) {
    const data = JSON.parse(el.textContent.replace(/&lt;/g, '<'));
    return data;
  }

  return {};
};
