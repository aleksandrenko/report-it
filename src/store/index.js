import { observable, autorun } from 'mobx';

class Store {
  @observable reports = ['pothole', 'fallen tree'];
}

//TODO expose the store only in debug mode
const store = window.store = new Store();

autorun(() => {
  console.log(store.reports);
});

export default store;
