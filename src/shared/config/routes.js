// @flow
import Index from '../../pages/index';
import Splash from '../../pages/splash';
import List from '../../pages/list';
import Details from '../../pages/details';
import Profile from '../../pages/profile';
import Report from '../../pages/report';

export default {
  index: {
    url: '/',
    component: Index
  },
  login: {
    url: '/login',
    component: Splash
  },
  list: {
    url: '/list',
    component: List
  },
  details: {
    url: '/details',
    component: Details
  },
  profile: {
    url: '/profile',
    component: Profile
  },
  report: {
    url: '/report',
    component: Report
  }
};
