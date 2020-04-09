import store from '@root/store';
import Reference from '@components/Reference';
import vuetify from '../vuetify';

export default { 
  title: 'References',
};

export const referenceComponent = () => ({
  components: { Reference },
  template: '<Reference />',
  vuetify,
  store
});