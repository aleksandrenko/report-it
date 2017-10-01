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
      <section className="profile">
        <img
          src="http://www.google.com/logo.jpg"
          alt="profile pic"
          width="40px"
          height="40px"
        />
        <br />
        John Johnson (Sofia) <br />
        <a href="./">see all 235 reports</a>
      </section>
    );
  }
}

export default Component;
