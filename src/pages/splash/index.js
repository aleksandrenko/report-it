// @flow
import React from 'react';
import './style.css';

type Props = {
  history: any,
  location: any
};

type State = {};

class Component extends React.Component<Props, State> {
  render() {
    return (
      <section className="splash">
        <div className="wrapper">
          <h1 className="header">Ready to report?</h1>
          <h2 className="sub-header">Report, follow and discuss local problems.</h2>
          <div className="login-header">login in using</div>
          <button className="login-with-facebook">Facebook</button>
        </div>
      </section>
    );
  }
}

export default Component;
