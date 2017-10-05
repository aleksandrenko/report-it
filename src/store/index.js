import { observable, autorun } from 'mobx';
import isDebug from '../utils/isDebug';

class Comment {
  constructor() {
    this.id = Date.now();
    this.url = '';
    this.timestamp = Date.now();
    this.description = 'a pot hole in the ground';
    this.author = 'Nikolay Aleksandrenko';
  }
}

class Location {
  constructor() {
    this.lat = 42.6782107;
    this.lng = 23.3182269;
  }

}

class Report {
  constructor() {
    this.id = Date.now();
    this.url = '';
    this.timestamp = Date.now();
    this.category = 'Pot hole';
    this.location = new Location();
    this.description = 'a pot hole in the ground';
    this.author = 'Nikolay Aleksandrenko';
    this.comments = [new Comment(), new Comment()];
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
