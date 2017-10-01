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
    return <section className="not-found">ERROR 404</section>;
  }
}

export default Component;
