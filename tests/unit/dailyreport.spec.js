import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils';
import DailyReport from '@/components/DailyReport.vue';
import store from '../../src/store';
import cases from '../../mock/cases.mock';

Vue.use(Vuetify);

describe('DailyReport.vue', () => {
  it('render the html', () => {
    const wrapper = shallowMount(DailyReport, {
      propsData: { data: cases.data },
      store
    });
    expect(wrapper.html()).toContain('<v-card-stub');
  });
});
