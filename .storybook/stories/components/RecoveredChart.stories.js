import { cases } from '../index';
import store from '@root/store';
import RecoveredChart from '@components/RecoveredChart';

export default { title: 'Recovered Chart' };

export const recoveredChartComponent = () => ({
  components: { RecoveredChart },
  data() {
    return {
      cases: cases
    }
  },
  template: '<RecoveredChart :data="cases.data" />',
  mounted() {
    // trigger the watcher
    this.cases = JSON.parse(JSON.stringify(cases));
  },
  store: store
});