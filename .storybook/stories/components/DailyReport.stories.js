import { cases } from '../index';
import store from '@root/store';
import DailyReport from '@components/DailyReport';

export default { title: 'Daily Report' };

export const dailyReportComponent = () => ({
  components: { DailyReport },
  data() {
    return {
      cases: cases
    }
  },
  template: '<DailyReport :data="cases.data" />',
  mounted() {
    // trigger the watcher
    this.cases = JSON.parse(JSON.stringify(cases));
  },
  store: store
});