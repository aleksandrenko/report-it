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
      <section className="details">
        <img
          src="http://www.goohttp://www.aacounty.org/sebin/f/j/pothole.jpeg"
          alt="temp"
        />
        <br />
        <h3>Pot hole (Category name</h3>
        <h5>location</h5>
        <p>description if any</p>
        2 days ago<a href="./">John Johnson creator</a>
      </section>
    );
  }
}

export default Component;
