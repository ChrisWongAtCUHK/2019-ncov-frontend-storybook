import { fatalityRate } from '../index';
import store from '@root/store';
import FatalityRateByAge from '@components/FatalityRateByAge';
import FatalityRateBySex from '@components/FatalityRateBySex';
import FatalityRateByComorbidity from '@components/FatalityRateByComorbidity';

export default { title: 'Fatality Rate' };

export const fatalityRateByAgeComponent = () => ({
  components: { FatalityRateByAge },
  data() {
    return {
      fatalityRate: fatalityRate
    }
  },
  template: '<FatalityRateByAge title="Fatality Rate by Age" :data="fatalityRate.byAge" />',
  store: store
});

export const fatalityRateBySexComponent = () => ({
  components: { FatalityRateBySex },
  data() {
    return {
      fatalityRate: fatalityRate
    }
  },
  template: '<FatalityRateBySex title="Fatality Rate by Sex" :data="fatalityRate.bySex" />',
  store: store
});

export const fatalityRateByComorbidityComponent = () => ({
  components: { FatalityRateByComorbidity },
  data() {
    return {
      fatalityRate: fatalityRate
    }
  },
  template: '<FatalityRateByComorbidity title="Fatality Rate by Comorbidity" :data="fatalityRate.byComorbidity" />',
  store: store
});