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
      <section className="report">
        <ol>
          <li>take photo</li>
          <li>select category</li>
          <li>choose location/finetune it</li>
          <li>add optional description and send</li>
          <li>preview the newly created report and optionaly share in fb</li>
        </ol>
      </section>
    );
  }
}

export default Component;
