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
        <span>take photo</span>
        <input type="file" accept="image/*;capture=camera"></input>
        <button onClick={this.props.onComplete}>take photo</button>
      </div>
    );
  }
}

export default Component;
