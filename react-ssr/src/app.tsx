import React from 'react';
import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ROUTES from './routes';
import './style.scss';

export default class App extends React.Component {
  render(): JSX.Element {
    return (
      <>
        <header className="header">
          <nav className="header__nav">
            <ul className="header__nav-list">
              {ROUTES.map((route) =>
                route.name ? (
                  <li className="header__nav-item" key={route.path}>
                    <NavLink
                      to={route.path}
                      exact
                      className="header__nav-link"
                      activeClassName="header__nav-link_active"
                    >
                      {route.name}
                    </NavLink>
                  </li>
                ) : null,
              )}
            </ul>
          </nav>
        </header>

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="main" timeout={300}>
                <Switch location={location}>
                  {ROUTES.map(({ path, Component }) => (
                    <Route key={path} exact path={path} component={Component} />
                  ))}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </>
    );
  }
}
