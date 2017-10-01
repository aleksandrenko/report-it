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
      <section className="list">
        <section className="tabs">
          <section>
            <header>List</header>
            <content>
              <ul>
                <li>
                  <img src="./" alt="sample" width="40px" height="40px" />
                  Pot hole (category) reported 3 days ago from{' '}
                  <a href="./">John Smith</a>
                </li>
                <li>
                  <img src="./" alt="sample" width="40px" height="40px" />
                  Pot hole (category) reported 3 days ago from{' '}
                  <a href="./">John Smith</a>
                </li>
              </ul>
            </content>
          </section>
          <section>
            <header>Map</header>
            <content>map here</content>
          </section>
        </section>
      </section>
    );
  }
}

export default Component;
