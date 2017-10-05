// @flow
import React from 'react';
import './style.css';

type Props = {
  history: any,
  location: any,
  onComplete: func
};

type State = {};

class Component extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <span>choose category</span>
        <button onClick={this.props.onComplete}>move forward</button>
      </div>
    );
  }
}

export default Component;
