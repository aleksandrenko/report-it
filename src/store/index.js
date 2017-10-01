import { observable, autorun } from 'mobx';
import isDebug from '../utils/isDebug';

class Report {
  constructor() {
    this.id = 'not connected';
    this.category = 'not connected';
    this.location = 'not connected';
    this.description = 'not connected';
    this.author = 'not connected';
    this.comments = ['not connected', 'not connected'];
  }
}

class Store {
  @observable reports = [];

  createReport = () => {
    this.reports.push(new Report());
  }
}

const store = new Store();

if (isDebug) {
  console.info('%cDEBUG: Store is available in the global scope as: "store"', "background: blue; color: #fff; padding: 2px 4px;");
  window.store = store;

  autorun(reaction => {
    console.info(store, reaction);
  });
}

export default store;
