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
        <span>ui for selecting the correct location</span>
        <button onClick={this.props.onComplete}>move</button>
      </div>
    );
  }
}

export default Component;
