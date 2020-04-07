import Vue from 'vue';
import Vuetify from 'vuetify'

import store from '@root/store';
import DailyReport from '@components/DailyReport';
import cases from './cases.mock';

Vue.use(Vuetify);

export default { title: 'Daily Report' };

export const dailyReportComponent = () => ({
  components: { DailyReport },
  data() {
    return {
      cases: cases
    }
  },
  template: '<DailyReport :data="cases.data" />',
  store: store
});