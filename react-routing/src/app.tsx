import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './components/home-page/home-page';
import AboutPage from './components/about-page/about-page';
import NotFoundPage from './components/not-found-page/not-found-page';
import DetailsPage from './components/details-page/details-page';
import ArticlePage from './components/article-page/article-page';

const ROUTES = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/about', name: 'About', Component: AboutPage },
  { path: '/details', Component: DetailsPage },
  { path: '/details/:id', Component: ArticlePage },
  { path: '*', Component: NotFoundPage }
];

export default class App extends React.Component {
  render(): JSX.Element {
    return (
      <Router>
        <header className="header">
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                ROUTES.map(route => (
                  route.name ?
                    <li className="header__nav-item" key={ route.path }>
                      <NavLink
                        to={ route.path }
                        exact
                        className="header__nav-link"
                        activeClassName="header__nav-link_active"
                      >
                        { route.name }
                      </NavLink>
                    </li> : null
                ))
              }
            </ul>
          </nav>
        </header>

        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={ location.key }
              classNames="main"
              timeout={ 300 }
            >
              <Switch location={ location }>
                {
                  ROUTES.map(({ path, Component }) => (
                    <Route key={ path } exact path={ path } component={ Component } />
                  ))
                }
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </Router>
    );
  }
}
