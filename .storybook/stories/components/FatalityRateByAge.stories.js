import { fatalityRate } from '../index';
import store from '@root/store';
import FatalityRateByAge from '@components/FatalityRateByAge';

export default { title: 'Daily Report' };

export const FatalityRateByAgeComponent = () => ({
  components: { FatalityRateByAge },
  data() {
    return {
      fatalityRate: fatalityRate
    }
  },
  template: '<FatalityRateByAge title="Fatality Rate by Age" :data="fatalityRate.byAge" />',
  store: store
});