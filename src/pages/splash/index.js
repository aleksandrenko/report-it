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
        <h1>report-it</h1>
        <h3>
          Report, view, an <br />
          discuss local<br />
          problems<br />
          <small>
            (graffiti, fly tipping, broken paving slabs, fallen tres or street
            lighting)
          </small>
        </h3>
        <button>Facebook Login</button>
      </section>
    );
  }
}

export default Component;
