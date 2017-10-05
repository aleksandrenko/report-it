// @flow
import React from 'react';
import store from './../../store';
import { observer } from 'mobx-react';
import moment from 'moment';

import './style.css';

type Props = {
  history: any,
  location: any
};

type State = {};

@observer
class Component extends React.Component<Props, State> {
  render() {

    const listItem = store.reports.map((item) =>
      <li>
        <hr/>
        <img src={item.url} alt={item.category} width="40px" height="40px" /> <br />
        <span>{item.category}</span>
        reported { moment(item.timestamp).fromNow() }
        from <a href="./">{ item.author }</a> <br />
        <span>{item.comments.length} comments</span>
      </li>
    );

    return (
      <section className="list">
        <section className="tabs">
          <section>
            <header>List</header>
            <content>
              <ul>
                { listItem }
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
