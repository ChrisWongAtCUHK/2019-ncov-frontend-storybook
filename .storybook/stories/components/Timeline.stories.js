import store from '@root/store';
import Timeline from '@components/Timeline';

import vuetify from '../vuetify';

export default { title: 'Timeline (GMT)' };

export const timelineComponent = () => ({
  components: { Timeline },
  template: '<Timeline />',
  vuetify,
  store
});