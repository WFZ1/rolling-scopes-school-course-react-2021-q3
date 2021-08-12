import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import HomePage from './components/home-page/home-page';
import AboutPage from './components/about-page/about-page';
import NotFoundPage from './components/not-found-page/not-found-page';
import DetailsPage from './components/details-page/details-page';

export default class App extends React.Component {
  render(): JSX.Element {
    return (
      <Router>
        <header className="header">
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <NavLink to="/" exact className="header__nav-link" activeClassName="header__nav-link_active">Home</NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/about" exact className="header__nav-link" activeClassName="header__nav-link_active">About</NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/not-found" exact className="header__nav-link" activeClassName="header__nav-link_active">404</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/details">
            <DetailsPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}
