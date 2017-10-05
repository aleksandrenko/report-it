// @flow
import React from 'react';
import './App.css';
import store from './store';

import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import routes from './shared/config/routes';
import NoMatch from './pages/404';

type Props = {
  history: any,
  location: any
};

type State = {};

@observer
class App extends React.Component<Props, State> {
  componentDidCatch(err, stack) {
    console.error(err, stack);
  }

  addToStore() {
    store.createReport();
  }

  render() {
    return (
      <div className="app">
        {this.props.location.pathname !== routes.login.url && (
          <header className="app-header">
            <nav>
              <ul>
                <li>
                  <button onClick={this.props.history.goBack}>back</button>
                </li>
                <li>{this.props.location.pathname}</li>
                <li>
                  <button onClick={this.props.history.goForward}>
                    forward
                  </button>
                </li>
              </ul>
            </nav>
          </header>
        )}
        <content className="app-body">
          <nav className="_temp-nav">
            <div>
              <button onClick={this.addToStore}>create example signal</button>
            </div>
            
            <ul>
              <li>
                <NavLink to={routes.index.url} exact>
                  Index
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.login.url}>Login/Splash</NavLink>
              </li>
              <li>
                <NavLink to={routes.list.url}>List of reports</NavLink>
              </li>
              <li>
                <NavLink to={routes.details.url}>Details</NavLink>
              </li>
              <li>
                <NavLink to={routes.profile.url}>Profile</NavLink>
              </li>
              <li>
                <NavLink to={routes.report.url}>Report</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route
              exact
              path={routes.index.url}
              component={routes.index.component}
            />
            <Route path={routes.login.url} component={routes.login.component} />
            <Route path={routes.list.url} component={routes.list.component} />
            <Route
              path={routes.details.url}
              component={routes.details.component}
            />
            <Route
              path={routes.profile.url}
              component={routes.profile.component}
            />
            <Route
              path={routes.report.url}
              component={routes.report.component}
            />
            <Route component={NoMatch} />
          </Switch>
        </content>
        {this.props.location.pathname !== routes.login.url && (
          <footer className="app-footer">
            <nav className="app-footer-nav">
              <ul>
                <li>
                  <NavLink to={routes.list.url}>Signals</NavLink>
                </li>
                <li>
                  <NavLink to={routes.report.url}>Report</NavLink>
                </li>
                <li>
                  <NavLink to={routes.profile.url}>Profile</NavLink>
                </li>
              </ul>
            </nav>
          </footer>
        )}
        <section className="overlays">
          <section className="terms-of-use">Terms of use</section>
        </section>
      </div>
    );
  }
};

export default withRouter(App);
